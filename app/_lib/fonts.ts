import { Inter, Londrina_Solid, Island_Moments } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
  variable: "--font-inter",
});

export const londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: ["300", "900"],
  variable: "--font-londrina",
});

export const island = Island_Moments({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-island",
});
