import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "product",
  description: "display single product ",
};
interface id {
  id: string; // Assuming id is of type string, adjust it accordingly
  // Other properties as needed
}

export async function generateStaticParams() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: id[] = await res.json();

  const productIds: string[] = products.map((product) => product.id);
  console.log(productIds);

  return productIds.map((id) => ({
    params: {
      id: id,
    },
  }));
}

async function getData(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function GiveProductDetail(props: any) {
  const product = await getData(props.params.id);

  return (
    <div className="bg-gray-900 py-24 mx-20 my-20">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl  lg:gap-x-8 lg:px-8">
        <div className="grid md:grid-cols-2 ">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-5xl uppercase">
              {product.title}
            </h1>

            <p className=" mt-5 text-3xl tracking-tight font-extrabold text-gray-200">
              Price:
              {` $ ${product.price}`}
            </p>

            <p className="mt-5 text-base text-gray-200">Description:</p>
            <br />
            <p className="text-gray-200 font-semibold italic">
              {product.description}
            </p>
          </div>
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={200}
              className="mx-12"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
