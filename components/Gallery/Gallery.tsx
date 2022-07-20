import { ImageSlider } from "./ImageSlider";

export const Gallery = () => {
  return (
    <section id="Gallery" className="flex flex-col py-10">
      <h1 className="self-center py-4">Gallery</h1>
      <ImageSlider />
    </section>
  );
};
