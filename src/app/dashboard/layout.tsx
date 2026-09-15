import TopBar from "@/components/Topbar";
import SideBar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <TopBar />
      <div className="dashboard-body">
        <SideBar />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}