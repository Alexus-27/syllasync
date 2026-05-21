import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Database, LogOut, LayoutDashboard } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user || (session.user as any).role !== "ADMIN") {
    redirect("/login");
  }

  const models = [
    { name: "User", path: "user" },
    { name: "Course", path: "course" },
    { name: "Enrollment", path: "enrollment" },
    { name: "Homework", path: "homework" },
    { name: "Message", path: "message" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-st-indigo text-white flex flex-col relative overflow-hidden">
        <div className="p-6 border-b border-st-purple relative z-10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Database className="h-6 w-6 text-st-lime" />
            Admin Panel
          </h2>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 relative z-10">
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard/admin" className="flex items-center gap-3 px-6 py-3 text-st-light hover:bg-st-purple hover:text-white transition-colors">
                <LayoutDashboard className="h-5 w-5" />
                Overview
              </Link>
            </li>
            <li className="px-6 py-2 text-xs font-semibold text-st-lime uppercase tracking-wider mt-4">
              Database Models
            </li>
            {models.map((model) => (
              <li key={model.path}>
                <Link 
                  href={`/dashboard/admin/${model.path}`}
                  className="block px-6 py-2.5 text-st-light/80 hover:bg-st-purple hover:text-white transition-colors"
                >
                  {model.name}s
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-st-purple relative z-10">
          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <button type="submit" className="flex items-center gap-2 text-st-light/80 hover:text-white w-full px-2 py-2 transition-colors">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
