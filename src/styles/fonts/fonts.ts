import { Inter, Quicksand } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

