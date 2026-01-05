import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"
import { CartContextProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Addkart",
  description: "By Rizwana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <CartContextProvider>
          <div className="layout">
            <Header />
            <Navbar />
            <main className="content">
              {children}
            </main>
          </div>
        </CartContextProvider>
      </body>
    </html>
  );
}
