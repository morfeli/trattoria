import { HeroSlider } from "./HeroSlider";
import { BrowserWidth } from "../../pages";
import HeroImages from "../Hero/HeroImages";

export const Hero = ({ isMobile, innerWidth }: BrowserWidth) => {
  return (
    <section className="relative">
      <HeroSlider
        images={HeroImages}
        isMobile={isMobile}
        innerWidth={innerWidth}
      />
      <div className="absolute flex flex-col items-center inset-0 top-40 text-white text-center font-bold">
        <h1 className="text-3xl">TRATTORIA Il CAFONE</h1>
        <p className="text-lg p-8">
          7 Ridge Road | Lyndhurst, New Jersey 07071 | 201.933.3355
        </p>
        <p>Italian Fine Dining Cusine</p>
      </div>
    </section>
  );
};
