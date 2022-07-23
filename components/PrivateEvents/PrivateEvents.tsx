import { ContactForm } from "./ContactForm";

export const PrivateEvents = () => {
  return (
    <section
      id="PrivateEvents"
      className="flex flex-col px-4 pt-8 md:flex-row "
    >
      <div className="flex flex-col items-center md:align-start md:w-50vw">
        <h1 className="pb-2 text-3xl tracking-widest uppercase border-b-2 w-fit border-b-blue-300">
          Private Events
        </h1>
        <p className="px-6 pt-4 leading-8 text-center md:text-xl md:leading-10">
          From birthday parties to social events, Il Cafone extends its services
          by turning it's dining room into your private event space. We have a
          variety of prefixed party menus for you to choose from. If there are
          any food or dietery restrictions please let us know so we can make the
          proper arrangments. Please leave us a short detailed message regarding
          your upcoming event.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};
