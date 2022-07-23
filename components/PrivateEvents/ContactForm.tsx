import { useState } from "react";
import { Input } from "./Input";
import classNames from "classnames";

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
  const inputStyle = classNames("m-3 p-4 rounded-lg shadow-lg");
  const textareaStyle = classNames("w-64 h-20 m-2 p-2 rounded-lg");

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

    const formData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      eventType: form.eventType,
      guestCount: form.guestCount,
      date: form.date,
    };

    if (!formIsValid) {
      setError(true);
      return;
    } else {
      fetch("/api/emailJSHandler", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      setForm(initialFormState);

      setShowModal(true);
    }
  };

  return (
    <section className="flex flex-col pt-4 md:w-50vw">
      <h1 className="self-center pb-2 mb-2 text-2xl tracking-widest uppercase border-b-2 w-fit border-b-blue-300">
        Contact
      </h1>
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col items-center w-3/4 py-8 mx-auto mt-2 rounded-xl bg-slate-400"
      >
        <div className="flex flex-col">
          <input
            type="text"
            id="firstName"
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
            id="lastName"
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
            id="phoneNumber"
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
            id="details"
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
            className="px-6 py-2 mt-4 bg-red-300 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
