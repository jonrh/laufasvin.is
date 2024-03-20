import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laufás Vín",
  description: "Vín og vínkynningar, laufasvin@laufasvin.is, 846 7421",
};

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
