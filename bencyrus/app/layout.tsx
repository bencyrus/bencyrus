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
          <div className="bg-green-500 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
