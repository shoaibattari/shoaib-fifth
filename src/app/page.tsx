import Categries from "./Components/Categries";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Cateogory",
  description: "display All Cateogory ",
};

export default function Home() {
  return (
    <main className=" h-screen py-6">
      <div className="md:mt-10">
        <Categries />
      </div>
    </main>
  );
}
