
import { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Witelabel - Soluções Personalizadas para Seu Negócio",
  icons: {
    icon: "/logo.svg",
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`antialiased bg-[#000000] ${plusJakarta.variable}`}>
            {children}
      </body>
    </html>
  );
}