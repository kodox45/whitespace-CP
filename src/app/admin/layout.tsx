import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const metadata = {
  title: "Whitespace CMS",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — fixed left */}
      <AdminSidebar />

      {/* Main area — offset by sidebar width */}
      <div className="ml-[260px] flex flex-1 flex-col">
        {/* Topbar */}
        <AdminTopbar />

        {/* Content — scrollable, gray background */}
        <main className="flex-1 overflow-y-auto bg-gray">{children}</main>
      </div>
    </div>
  );
}
