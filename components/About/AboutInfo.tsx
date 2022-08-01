import { useRouter } from "next/router";

export const AboutInfo = () => {
  return (
    <>
      <div className="flex flex-col md:w-50vw">
        <h1 className="self-center pb-2 text-xl tracking-widest uppercase border-b-2 border-b-white w-fit">
          About
        </h1>

        <p className="px-2 pt-4 md:text-xl md:leading-10 md:px-8">
          Since its inception over two decades ago, Il Cafone has doubled in
          size while maintaining its commitment to excellent food and service.
          Our specialty is fostering a neighborhood atmosphere with rustic
          Italian dishes at reasonable prices. For your next celebration, we
          provide the same intimate feel and delicious food for special events
          and private parties.
        </p>
      </div>

      <div className="flex flex-col py-4 md:w-50vw md:px-6">
        <h1 className="self-center pb-2 text-xl tracking-widest uppercase border-b-2 w-fit border-b-white">
          Hours of Operation
        </h1>
        <p className="py-10 text-lg lg:text-xl">
          7 Ridge Road | Lyndhurst, New Jersey 07071 | 201.933.3355
        </p>
        <div className="flex justify-between py-8">
          <h2 className="uppercase">Tuesday - Friday</h2>
          <div className="flex flex-col items-end">
            <p>11:30AM - 2:30PM</p>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr className="w-full h-1 bg-white" />
        <div className="flex justify-between py-8">
          <h2 className="uppercase">Saturday</h2>
          <div>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr className="w-full h-1 bg-white" />

        <div className="flex justify-between py-8">
          <h2 className="uppercase">Sunday</h2>
          <div>
            <p>1PM - 9PM</p>
          </div>
        </div>
      </div>
    </>
  );
};
