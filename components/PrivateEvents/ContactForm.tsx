import { useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

import { Modal } from "../Modal/Modal";

const isEmpty = (value: string) => value.trim() === "";
const isTenChars = (value: string) => value.trim().length === 12;

const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type ContactInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  eventType: string;
  guestCount: string;
  date: any;
  touched: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
    eventType: boolean;
    guestCount: boolean;
    date: boolean;
  };
  validity: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
    eventType: boolean;
    guestCount: boolean;
    date: boolean;
  };
};

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  eventType: "",
  guestCount: "",
  date: "",
  touched: {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
    eventType: false,
    guestCount: false,
    date: false,
  },
  validity: {
    firstName: true,
    lastName: true,
    phone: true,
    email: true,
    message: true,
    eventType: true,
    guestCount: true,
    date: true,
  },
};

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState<ContactInput>(initialFormState);
  const [error, setError] = useState<boolean>(false);

  const onCloseModalHandler = () => {
    setShowModal(false);
  };
  const inputStyle = classNames("m-3 p-4 w-60 rounded-lg shadow-lg md:w-25vw");
  const textareaStyle = classNames(
    "m-3 p-2 w-60 h-32 rounded-lg shadow-lg md:w-25vw"
  );

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const phoneNumberisValid = isTenChars(form.phone);
    const messageIsValid = !isEmpty(form.message);
    const eventTypeIsValid = !isEmpty(form.eventType);
    const guestCountIsValid = !isEmpty(form.guestCount);
    const dateIsValid = !isEmpty(form.date);
    const emailIsValid = isEmailValid(form.email);

    setForm((current) => ({
      ...current,
      validity: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        phone: phoneNumberisValid,
        message: messageIsValid,
        email: emailIsValid,
        eventType: eventTypeIsValid,
        guestCount: guestCountIsValid,
        date: dateIsValid,
      },
    }));

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      phoneNumberisValid &&
      emailIsValid &&
      eventTypeIsValid &&
      guestCountIsValid &&
      dateIsValid;

    if (!formIsValid) {
      setError(true);
      return;
    } else {
      emailjs
        .sendForm(
          "contact_service",
          process.env.NEXT_PUBLIC_TEMPLATE,
          e.target,
          process.env.NEXT_PUBLIC_KEY
        )
        .then(
          (result: any) => {
            setShowModal(result);
          },
          (error: any) => {
            console.log(error.message);
          }
        );
      setForm(initialFormState);
    }
  };

  return (
    <section className="flex flex-col pt-20 md:w-50vw" id="Contact">
      <h1 className="self-center pb-2 mb-2 text-xl tracking-widest uppercase border-b-2 w-fit border-b-lightGrayThree">
        Contact
      </h1>
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col items-center w-3/4 py-8 mx-auto mt-2 rounded-xl bg-header"
      >
        <div className="flex flex-col">
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                firstName: e.target.value,
                touched: {
                  ...current.touched,
                  firstName: true,
                },
              }))
            }
            value={form.firstName}
          />
          {!form.validity.firstName && (
            <span
              className={
                !form.validity.firstName && form.touched.firstName
                  ? "hidden"
                  : "visible"
              }
            >
              Please enter your first name.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                lastName: e.target.value,
                touched: {
                  ...current.touched,
                  lastName: true,
                },
              }))
            }
            value={form.lastName}
          />
          {!form.validity.lastName && (
            <span
              className={
                !form.validity.lastName && form.touched.lastName
                  ? "hidden"
                  : "visible"
              }
            >
              Please enter your last name.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                email: e.target.value,
                touched: {
                  ...current.touched,
                  email: true,
                },
              }))
            }
            value={form.email}
          />
          {!form.validity.email && (
            <span
              className={
                !form.validity.email && form.touched.email
                  ? "hidden"
                  : "visible"
              }
            >
              Please enter your email address.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                phone: e.target.value,
                touched: {
                  ...current.touched,
                  phone: true,
                },
              }))
            }
            value={form.phone}
          />
          {!form.validity.phone && (
            <span
              className={
                !form.validity.lastName && form.touched.lastName
                  ? "hidden"
                  : "visible"
              }
            >
              Please enter your phone number.
            </span>
          )}
          <small className="self-center">Format: xxx-xxx-xxxx</small>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="eventType"
            name="eventType"
            placeholder="Event Type"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                eventType: e.target.value,
                touched: {
                  ...current.touched,
                  eventType: true,
                },
              }))
            }
            value={form.eventType}
          />
          {!form.validity.eventType && (
            <span
              className={
                !form.validity.eventType && form.touched.eventType
                  ? "hidden"
                  : "visible"
              }
            >
              Please describe your event type.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="guestCount"
            name="guestCount"
            placeholder="Number of Guests"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                guestCount: e.target.value,
                touched: {
                  ...current.touched,
                  guestCount: true,
                },
              }))
            }
            value={form.guestCount}
          />
          {!form.validity.guestCount && (
            <span
              className={
                !form.validity.guestCount && form.touched.guestCount
                  ? "hidden"
                  : "visible"
              }
            >
              Please enter the amount of guests.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="date"
            id="date"
            name="date"
            className={inputStyle}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                date: e.target.value,
                touched: {
                  ...current.touched,
                  date: true,
                },
              }))
            }
            value={form.date}
          />
          {!form.validity.date && (
            <span
              className={
                !form.validity.date && form.touched.date ? "hidden" : "visible"
              }
            >
              Please select a date for your event.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            className={textareaStyle}
            id="message"
            name="message"
            placeholder="Is there any additional information you would like to add?"
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                message: e.target.value,
                touched: {
                  ...current.touched,
                  message: true,
                },
              }))
            }
            value={form.message}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 mt-4 tracking-widest uppercase bg-white rounded-lg shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <Modal show={showModal} onClose={onCloseModalHandler}>
        Thank you! We have receieved your message. We will be in contact within
        24 hours!
      </Modal>
    </section>
  );
};
