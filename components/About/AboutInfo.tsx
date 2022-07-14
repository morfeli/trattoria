export const AboutInfo = () => {
  return (
    <>
      <div>
        <h1>About</h1>

        <p>
          Since its inception over two decades ago, Il Cafone has doubled in
          size while maintaining its commitment to excellent food and service.
          Our specialty is fostering a neighborhood atmosphere with rustic
          Italian dishes at reasonable prices. For your next celebration, we
          provide the same intimate feel and delicious food for special events
          and private parties.
        </p>
      </div>

      <div className="flex flex-col pt-4">
        <h1>Hours of Operation</h1>
        <div className="flex justify-between py-8">
          <h2>Monday - Friday</h2>
          <div className="flex flex-col items-end">
            <p>11:30AM - 2:30PM</p>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-8">
          <h2>Saturday</h2>
          <div>
            <p>5PM - 10PM</p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between py-8">
          <h2>Sunday</h2>
          <div>
            <p>1PM - 9PM</p>
          </div>
        </div>
      </div>
    </>
  );
};
