import type { Metadata } from "next";
import { DM_Sans, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const michroma = Michroma({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hardware Techie",
  description: "Created by Abhishek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
