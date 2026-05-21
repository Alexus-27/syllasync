"use client";

import { useState } from "react";
import { GraduationCap, ArrowRight, User, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      if (res.ok) {
        router.push("/login");
      } else {
        const data = await res.json();
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-st-light flex flex-col md:flex-row font-sans selection:bg-st-lime/30">
      {/* Left Panel - Branding */}
      <div className="w-full md:w-5/12 bg-st-indigo flex flex-col p-12 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-st-purple rounded-full mix-blend-screen filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-st-purple rounded-full mix-blend-screen filter blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4"></div>
        
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 relative z-10 w-fit">
          <GraduationCap className="h-8 w-8 text-st-lime" />
          SyllaSync
        </Link>
        
        <div className="flex-1 flex flex-col justify-center relative z-10 max-w-md mx-auto mt-12 md:mt-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute -top-6 -left-6 bg-st-lime text-st-indigo p-3 rounded-2xl shadow-xl transform -rotate-6">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight mt-4">
              Digital-First <br /> Academic Excellence.
            </h1>
            <p className="text-st-light/80 text-lg leading-relaxed">
              Join the SyllaSync platform designed exclusively for Woosong University. Experience a streamlined, modern approach to managing your courses, assignments, and academic life.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-st-light/60 relative z-10">
          © 2026 SyllaSync. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full md:w-7/12 bg-white flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-st-dark mb-2">Create your account</h2>
            <p className="text-gray-500">Get started with SyllaSync today.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">I am a...</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setRole("STUDENT")}
                  className={`flex-1 p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                    role === "STUDENT" 
                      ? "border-st-purple bg-st-purple/5 shadow-[0_0_0_1px_#3B0764]" 
                      : "border-gray-200 hover:border-st-purple/30 text-gray-600 bg-white"
                  }`}
                >
                  <div className="font-bold text-st-dark mb-1">Student</div>
                  <div className="text-xs text-gray-500">Access courses & assignments</div>
                  {role === "STUDENT" && (
                    <div className="absolute top-4 right-4 text-st-purple">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("PROFESSOR")}
                  className={`flex-1 p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                    role === "PROFESSOR" 
                      ? "border-st-purple bg-st-purple/5 shadow-[0_0_0_1px_#3B0764]" 
                      : "border-gray-200 hover:border-st-purple/30 text-gray-600 bg-white"
                  }`}
                >
                  <div className="font-bold text-st-dark mb-1">Professor</div>
                  <div className="text-xs text-gray-500">Manage classes & syllabi</div>
                  {role === "PROFESSOR" && (
                    <div className="absolute top-4 right-4 text-st-purple">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-st-purple transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-st-purple/20 focus:border-st-purple outline-none transition-all placeholder:text-gray-400"
                    placeholder="e.g. Jane Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">University Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-st-purple transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-st-purple/20 focus:border-st-purple outline-none transition-all placeholder:text-gray-400"
                    placeholder="jane.doe@wsu.ac.kr"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-st-purple transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-st-purple/20 focus:border-st-purple outline-none transition-all placeholder:text-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" required className="mt-1 w-4 h-4 text-st-purple border-gray-300 rounded focus:ring-st-purple" />
              <span className="text-sm text-gray-600">
                I agree to the Woosong University <a href="#" className="text-st-purple font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-st-purple font-medium hover:underline">Privacy Policy</a>.
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-st-purple hover:bg-st-indigo text-white font-semibold py-4 rounded-xl transition-all shadow-[0px_4px_20px_rgba(59,7,100,0.2)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-st-purple font-bold hover:underline transition-all">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
