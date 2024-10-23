import "./globals.css";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { LuMail, LuPhone } from "react-icons/lu";

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
          <div className="flex-1 overflow-y-auto">
            <div>{children}</div>
            <hr className="border-neutral-700 mx-[20px]" />
            <PageFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

function PageFooter() {
  return (
    <div className="p-[36px]">
      <div>
        <h2 className="text-[22px] font-medium">Want to get in touch?</h2>
        <p className="text-[14px] text-neutral-400 font-light">
          I am always excited to chat!
        </p>
      </div>
      <div className="flex justify-between mt-[36px] text-neutral-200 font-light md:w-[510px] flex-col md:flex-row gap-[24px]">
        <div className="flex flex-row items-center gap-[8px]">
          <div className="text-[24px] bg-neutral-700/80 rounded-full p-[12px]">
            <LuMail />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-neutral-400">Email</span>
            <span>realbencyrus@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[8px]">
          <div className="text-[24px] bg-neutral-700/80 rounded-full p-[12px]">
            <LuPhone />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-neutral-400">Phone</span>
            <span>+1 (587) 832-4402</span>
          </div>
        </div>
      </div>
    </div>
  );
}
