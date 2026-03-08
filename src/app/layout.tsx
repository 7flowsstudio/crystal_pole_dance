import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata: Metadata = {
  title: "Студія Crystal Pole Dance",
  description: "Crystal pole dance - місце сили, відновлення та краси ",
  icons: {
			icon: "/icon_white.svg",
		},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
