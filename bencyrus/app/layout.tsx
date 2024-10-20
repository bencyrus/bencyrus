import "./globals.css";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="md:hidden">
            <Navbar />
          </div>
          <div className="bg-neutral-900/95 flex-1 text-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
