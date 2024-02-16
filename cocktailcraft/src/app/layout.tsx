import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"], 
  weight: ["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "CocktailCraft",
  description: "Explore a variety of random cocktails or refine your ingredient search to discover the perfect flavor combinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
