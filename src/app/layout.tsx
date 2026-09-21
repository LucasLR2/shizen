import "./globals.css";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Shizen App",
  description: "Dashboard Cyberpunk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="dashboard-layout">
          <Topbar />
          <div className="dashboard-body">
            <Sidebar />
            <main className="dashboard-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}