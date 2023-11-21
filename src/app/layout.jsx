import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const exo = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "Yadutsav Event",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Navbar />
        <div
          className={`${exo.className} relative z-10 flex flex-col max-w-full`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}