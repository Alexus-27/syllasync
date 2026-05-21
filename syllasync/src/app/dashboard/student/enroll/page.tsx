"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Key } from "lucide-react";
import Link from "next/link";

export default function EnrollPage() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode: inviteCode.toUpperCase() }),
      });

      if (res.ok) {
        router.push("/dashboard/student");
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to join course");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="max-w-xl mx-auto">
        <Link href="/dashboard/student" className="inline-flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-xl text-center">
          <div className="h-16 w-16 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mx-auto mb-6">
            <Key className="text-white h-8 w-8" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Join a Course</h1>
          <p className="text-neutral-400 text-sm mb-8">
            Enter the 6-character invite code provided by your professor.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-neutral-300 ml-1">Invite Code</label>
              <input
                type="text"
                required
                maxLength={6}
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-4 bg-neutral-950/50 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all placeholder:text-neutral-600 text-center text-2xl font-mono tracking-widest uppercase"
                placeholder="ABC123"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || inviteCode.length < 6}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-medium transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Enroll in Course"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
