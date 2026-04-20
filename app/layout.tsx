import type { Metadata } from "next";
import { Antic_Didone, Montserrat } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Fastocron - AI Powered Business Intelligence",
  description: "Fastocron is a platform that helps you analyze your data and get insights from it. It is powered by AI and can help you analyze your data and get insights from it.",
};
const anticDidone = Antic_Didone({
  variable: "--font-antic-didone",
  subsets: ["latin"],
  weight: ["400"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anticDidone.variable} ${montSerrat.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
