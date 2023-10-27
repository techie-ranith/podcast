import type { Metadata } from "next";
import { inter, quicksand } from "@/styles/fonts";
import "@/styles/globals.css";
import { main } from "@/data/metadata";

export const metadata: Metadata = {
  title: main.title,
  description: main.description,
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
