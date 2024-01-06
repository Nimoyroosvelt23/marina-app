import "./globals.css";
import './panel/panel.css'
import './entertainmentlist/entertainmentl.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";


const inter = Inter({ subsets: ["latin"] });

const medium = localFont({
  src: "./font/iransansX family/IRANSansX-Medium.ttf",
  variable: "--medium",
});
const regular = localFont({
  src: "./font/iransansX family/IRANSansX-Regular.ttf",
  variable: "--regular",
});

const bold = localFont({
  src: "./font/iransansX family/IRANSansX-Bold.ttf",
  variable: "--bold",
});




const small = localFont({
  src: "./font/Farsi numerals/IRANSansXFaNum-Light.ttf",
  variable: "--small",
});

const bolder = localFont({
  src: "./font/iransansX family/IRANSansX-ExtraBold.ttf",
  variable: "--bolder",
});


export const metadata: Metadata = {
  title: "Marina",
  description: "مارینا ",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
      dir="rtl"
        className={`${regular.variable} ${medium.variable} ${bold.variable} ${small.variable} ${bolder.variable}  `}
      >
        {children}
      </body>
    </html>
  );
}
