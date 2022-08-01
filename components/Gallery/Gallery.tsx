import { ImageSlider } from "./ImageSlider";

export const Gallery = () => {
  return (
    <section id="Gallery" className="flex flex-col py-10">
      <h1 className="self-center py-2 mb-8 text-xl tracking-widest uppercase border-b-2 border-b-blue-300">
        Gallery
      </h1>
      <ImageSlider />
    </section>
  );
};
