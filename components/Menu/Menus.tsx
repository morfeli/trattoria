import { MenuBtn } from "./MenuBtn";

export const Menus = () => {
  return (
    <section id="Menu" className="flex flex-col pt-8">
      <h1 className="self-center text-3xl py-4">Menus</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 mx-auto">
        <MenuBtn id="insalata">Insalata</MenuBtn>
        <MenuBtn id="antipasta">Antipasti</MenuBtn>
        <MenuBtn id="homemade-pasta">Homemade Pasta</MenuBtn>
        <MenuBtn id="dry-pasta">Dry Pasta</MenuBtn>
        <MenuBtn id="classics">The Classics</MenuBtn>
        <MenuBtn id="pesce">Pesce</MenuBtn>
        <MenuBtn id="pollo">Pollo</MenuBtn>
        <MenuBtn id="carni">Carni</MenuBtn>
        <MenuBtn id="pizza">La Pizza</MenuBtn>
        <MenuBtn id="sides">Sides</MenuBtn>
      </div>
    </section>
  );
};
