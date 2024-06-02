import type { Metadata } from "next";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const garamond = EB_Garamond(
  { 
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-garamond" 
  }
);

const lufga = localFont({
  src: [
    {
      path: "../static/fonts/lufga/LufgaThin.woff",
      style: "normal",
      weight: "100"
    },
    {
      path: "../static/fonts/lufga/LufgaThinItalic.woff",
      style: "italic",
      weight: "100"
    },
    {
      path: "../static/fonts/lufga/LufgaExtraLight.woff",
      style: "normal",
      weight: "200"
    },
    {
      path: "../static/fonts/lufga/LufgaExtraLightItalic.woff",
      style: "italic",
      weight: "200"
    },
    {
      path: "../static/fonts/lufga/LufgaLight.woff",
      style: "normal",
      weight: "300"
    },
    {
      path: "../static/fonts/lufga/LufgaLightItalic.woff",
      style: "italic",
      weight: "300"
    },
    {
      path: "../static/fonts/lufga/LufgaRegular.woff",
      style: "normal",
      weight: "400"
    },
    {
      path: "../static/fonts/lufga/LufgaItalic.woff",
      style: "italic",
      weight: "400"
    },
    {
      path: "../static/fonts/lufga/LufgaMedium.woff",
      style: "normal",
      weight: "500"
    },
    {
      path: "../static/fonts/lufga/LufgaMediumItalic.woff",
      style: "italic",
      weight: "500"
    },
    {
      path: "../static/fonts/lufga/LufgaSemiBold.woff",
      style: "normal",
      weight: "600"
    },
    {
      path: "../static/fonts/lufga/LufgaSemiBoldItalic.woff",
      style: "italic",
      weight: "600"
    },
    {
      path: "../static/fonts/lufga/LufgaBold.woff",
      style: "normal",
      weight: "700"
    },
    {
      path: "../static/fonts/lufga/LufgaBoldItalic.woff",
      style: "italic",
      weight: "700"
    },
    {
      path: "../static/fonts/lufga/LufgaExtraBold.woff",
      style: "normal",
      weight: "800"
    },
    {
      path: "../static/fonts/lufga/LufgaExtraBoldItalic.woff",
      style: "italic",
      weight: "800"
    },
    {
      path: "../static/fonts/lufga/LufgaBlack.woff",
      style: "normal",
      weight: "900"
    },
    {
      path: "../static/fonts/lufga/LufgaBlackItalic.woff",
      style: "italic",
      weight: "900"
    },
  ],
  variable: "--font-lufga"
});



export const metadata: Metadata = {
  title: "QuillHub",
  description: "Built for writers by writers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufga.variable} ${garamond.variable} font-lufga`}>
        <MainHeader/>
        <main>
          {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  );
}
