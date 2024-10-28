import "./globals.css";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { LuMail, LuPhone } from "react-icons/lu";
import PageFooter from "@/components/page-footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row bg-neutral-900/95 text-white h-svh overflow-hidden">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="md:hidden">
            <Navbar />
          </div>
          <div className="flex-1 overflow-y-auto mt-[66px] md:mt-0">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
