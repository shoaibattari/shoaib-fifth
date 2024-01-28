import Link from "next/link";
import React from "react";



async function getcategories() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  const categories = await res.json();
  // console.log((categories));

  return categories;
}

export default async function Categries() {
  const categories = await getcategories();

  return (
    <>
      <Link href="/AllProducts">
        <p className="text-white text-sm md:text-4xl uppercase bg-blue-500 mx-24 h-36 flex justify-center items-center ">
          All Products
        </p>
      </Link>

      <div className="grid md:grid grid-cols-2 justify-around md:px-16 ">
        {categories.map((category: [], index: number) => (
          <Link href={`/AllProducts/${category}`} key={index}>
            <p className="text-white text-sm md:text-4xl uppercase bg-blue-300 m-8 h-36 flex justify-center items-center">
              {category}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
