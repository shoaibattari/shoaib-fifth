import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Shoaib Next Task",
  description: "create project internee.pk task ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4 bg-white max-w-[1580px]">
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
