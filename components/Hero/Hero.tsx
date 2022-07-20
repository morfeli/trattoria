import { HeroSlider } from "./HeroSlider";
import { BrowserWidth } from "../../pages";

export const Hero = ({ isMobile, innerWidth }: BrowserWidth) => {
  return (
    <section className="relative bg-black">
      <HeroSlider isMobile={isMobile} innerWidth={innerWidth} />
      <div className="absolute inset-0 flex flex-col items-center font-bold text-center text-white top-40">
        <h1 className="text-3xl">TRATTORIA Il CAFONE</h1>
        <p className="text-md">Italian Fine Dining Cusine</p>
      </div>
    </section>
  );
};
