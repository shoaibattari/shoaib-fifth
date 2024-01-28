import Image from "next/image";
import { data } from "../Components/types";
import Link from "next/link";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "All Product",
  description: "display All product ",
};



async function getData(category: string) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function GiveProductDetail(props: any) {
  const products = await getData(props.params.category);

  return (
    <div>
      <div className="md:px-[60px] px-[20px] grid place-items-center gap-x-40 grid-col-2 md:grid-cols-3 py-5">
        {products.map((ele: data) => (
          <div key={ele.id} className="mt-10  ">
            <div className="mt-3">
              <Link href={`product/${ele.id}`}>
              <Image
                src={`${ele.image}`}
                alt={ele.title}
                width={300}
                height={400}
              />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
