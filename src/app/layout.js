import { Bricolage_Grotesque } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import WhatsAppIcon from "@/components/layout/WhatsAppIcon";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit", 
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"], 
  variable: "--font-bricolage",
});
export const metadata = {
  title: "B2B SEO Agency UK | Rankings, Leads & AI | Teqnoor",
  description: "B2B SEO services that bring qualified leads, not just rankings. Consultant led, built for search and AI answers. Free SEO review, UK based.   ",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        {/* Floating WhatsApp Button */}
       <WhatsAppIcon />
      </body>
    </html>
  );
}