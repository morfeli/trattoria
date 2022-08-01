// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

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

export default async function emailJSHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      eventType,
      guestCount,
      date,
    } = data;

    const firstNameisValid = !isEmpty(firstName);
    const lastNameisValid = !isEmpty(lastName);
    const emailIsValid = isEmailValid(email);
    const phoneNumberisValid = isTenChars(phone);
    const eventTypeIsValid = !isEmpty(eventType);
    const guestCountIsValid = !isEmpty(guestCount);
    const dateIsValid = !isEmpty(date);

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      phoneNumberisValid &&
      emailIsValid &&
      eventTypeIsValid &&
      guestCountIsValid &&
      dateIsValid;

    if (!formIsValid) {
      return;
    } else {
      console.log("test");
    }
  }
}
