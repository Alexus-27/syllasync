import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const role = (session.user as any).role;

  if (role === "ADMIN") {
    redirect("/dashboard/admin");
  } else if (role === "PROFESSOR") {
    redirect("/dashboard/professor");
  } else {
    redirect("/dashboard/student");
  }
}
