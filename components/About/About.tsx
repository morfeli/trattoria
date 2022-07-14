import { AboutInfo } from "./AboutInfo";
import { TeamInfo } from "./TeamInfo";

export const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col p-8 leading-8 text-center text-slate-700 bg-lightGrayTwo md:px-18 md:text-lg"
    >
      <AboutInfo />
      <TeamInfo />
    </section>
  );
};
