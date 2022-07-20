import path from "path";
import fs from "fs/promises";

import { useRouter } from "next/router";

import { LeftArrowSVG } from "../../components/UI/LeftArrowSVG";

const MenuDetailsPage = ({ data, title }: any) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <button className="flex items-center p-4 cursor-pointer" onClick={goBack}>
        <LeftArrowSVG />
        <p className="text-xs tracking-wide uppercase">Trattoria Al Cafone</p>
      </button>

      <section className="flex flex-col">
        <div className="self-center pt-8 text-center">
          <h1 className="text-3xl">Trattoria Il Cafone</h1>
          <h2 className="py-4 text-2xl">{title}</h2>
          <hr className="self-center w-56 pb-8" />
        </div>

        <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item: any, idx: number) => (
            <div key={item.name} className="m-4">
              <h3 className="tracking-wide uppercase">{item.name}</h3>
              <p className="p-1 text-sm leading-6">{item.description}</p>
              <p className="pt-2">$ {item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const paramsID = params.id;
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const selectedData = data[0][paramsID];

  let title;
  switch (paramsID) {
    case "insalata":
      title = "Insalata";
      break;
    case "antipasta":
      title = "AntiPasta";
      break;
    case "homemade-pasta":
      title = "Homemade Pasta";
      break;
    case "dry-pasta":
      title = "Dry Pasta";
      break;
    case "classics":
      title = "The Classics";
      break;
    case "pesce":
      title = "Pesce";
      break;
    case "pollo":
      title = "Pollo";
      break;
    case "carni":
      title = "Carne";
      break;
    case "pizza":
      title = "La Pizza";
      break;
    case "sides":
      title = "Sides";
      break;
  }

  return {
    props: {
      data: selectedData,
      title: title,
    },
  };
}

export default MenuDetailsPage;
