import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link href="/dashboard" className="sidebar-link active">
          Dashboard
        </Link>
      </nav>
    </aside>
  );
}