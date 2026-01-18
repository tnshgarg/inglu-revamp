import type { Metadata } from "next";
import { Inter, Bebas_Neue, DM_Sans } from "next/font/google"; // Import standard fonts
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

// Use standard google fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Bebas Neue is a good match for the bold condensed headings
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "INGLU - Connect with Experiences",
  description: "INGLU connects colleges and brands through experiences students actually care about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} ${dmSans.variable} font-sans antialiased text-inglu-black bg-inglu-bg cursor-none`}>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
