import path from "path";
import fs from "fs/promises";

const MenuDetailsPage = ({ data, title }: any) => {
  return (
    <section>
      <h1>Trattoria Il Cafone</h1>
      <h2>{title}</h2>
      {data.map((item: any, idx: number) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </section>
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
