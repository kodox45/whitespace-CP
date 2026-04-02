import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gramatika = localFont({
  src: [
    {
      path: "../../public/fonts/Gramatika-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gramatika-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gramatika-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gramatika-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gramatika",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whitespace — Brand Strategy & Consulting",
  description:
    "We help companies make better brand decisions through strategic clarity, aligned narratives, and a direction that connects brand and business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gramatika.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
