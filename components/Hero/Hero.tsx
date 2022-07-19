import { HeroSlider } from "./HeroSlider";
import { BrowserWidth } from "../../pages";
import HeroImages from "../Hero/HeroImages";

export const Hero = ({ isMobile, innerWidth }: BrowserWidth) => {
  return (
    <section className="relative bg-black">
      <HeroSlider
        // images={HeroImages}
        isMobile={isMobile}
        innerWidth={innerWidth}
      />
      <div className="absolute inset-0 flex flex-col items-center font-bold text-center text-white top-40">
        <h1 className="text-3xl">TRATTORIA Il CAFONE</h1>
        <p className="py-4 text-lg">
          7 Ridge Road | Lyndhurst, New Jersey 07071 | 201.933.3355
        </p>
        <p className="text-md">Italian Fine Dining Cusine</p>
      </div>
    </section>
  );
};
