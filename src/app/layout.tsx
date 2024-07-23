import type { Metadata } from "next";
import { Bebas_Neue, Contrail_One, Inclusive_Sans, Silkscreen } from "next/font/google"
import "./globals.css";
import CameraAnimation from "@/components/CameraAnimation";

export const metadata: Metadata = {
  title: "Canon",
  description: "Delighting You Always",
};

const silkScreen = Silkscreen({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable:"--font-silk"
});

const contrail = Contrail_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable:"--font-contrail"
});

const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable:"--font-bebas"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-screen overflow-x-hidden ${silkScreen.variable} ${contrail.variable} ${bebas.variable}`}>
        {/* <CameraAnimation> */}
          {children}
        {/* </CameraAnimation> */}
      </body>
    </html>
  );
}
