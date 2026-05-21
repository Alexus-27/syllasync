"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function CreateCoursePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (res.ok) {
        router.push("/dashboard/professor");
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to create course");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/dashboard/professor" className="inline-flex items-center gap-2 text-neutral-400 hover:text-indigo-400 transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Create New Course</h1>
              <p className="text-neutral-400 text-sm">Set up a new class and get an invite code.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300 ml-1">Course Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-neutral-600"
                placeholder="e.g. Advanced Software Engineering"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300 ml-1">Description (Optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-neutral-600 resize-none"
                placeholder="Briefly describe the goals of this course..."
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
