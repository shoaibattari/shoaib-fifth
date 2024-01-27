import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="text-center flex justify-around  text-black text-xs md:text-3xl">
        <Link href={"/"} className=" cursor-pointer">
          <p>NextJS Internship </p>
        </Link>
        <Link
          href={"https://github.com/shoaibattari"}
          target="_blank"
          className=" cursor-pointer hover:text-gray-800"
        >
          <p>Shoaib Memon</p>
        </Link>

        <p>TSK-000-70</p>
        <Link href={"/AllProducts"} className=" cursor-pointer">
          <p>AllProducts </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
