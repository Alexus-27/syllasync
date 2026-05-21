import Link from "next/link";
import { BookOpen, ArrowRight, LayoutDashboard, Bell, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-st-light text-st-dark min-h-screen flex flex-col font-sans selection:bg-st-lime/30">
      {/* TopNavBar */}
      <header className="w-full top-0 sticky bg-white shadow-sm z-50">
        <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-st-purple flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-st-lime" />
            SyllaSync
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="text-gray-600 font-medium hover:text-st-purple transition-colors border-b-2 border-st-purple" href="#">Home</Link>
            <Link className="text-gray-600 font-medium hover:text-st-purple transition-colors border-b-2 border-transparent" href="#features">Features</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-st-dark font-medium px-4 py-2 hover:text-st-purple transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-st-purple text-white font-medium px-5 py-2.5 rounded-lg hover:bg-st-indigo transition-all active:scale-95 shadow-md">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden py-12 md:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-st-dark leading-tight tracking-tight">
                Sync Your Syllabus, <br/>
                <span className="text-st-purple">Master Your Semester</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-[500px] leading-relaxed">
                Centralized schedules, assignments, and communication for Woosong University.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/register" className="bg-st-purple text-white font-semibold text-lg px-8 py-3.5 rounded-xl shadow-[0px_4px_20px_rgba(59,7,100,0.3)] hover:bg-st-indigo transition-all active:scale-95 flex items-center gap-2 group">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#features" className="bg-white text-st-purple border-2 border-st-purple font-semibold text-lg px-8 py-3.5 rounded-xl hover:bg-st-purple/5 transition-all active:scale-95 flex items-center gap-2">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative w-full rounded-2xl overflow-hidden drop-shadow-2xl bg-teal-50/50 p-4">
              <img 
                alt="Dashboard Mockup" 
                className="w-full h-auto object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcu-QN3Z3BDA2tO0FPM9wcL0p_fb7S-zaLJmexguLgqHnWMWpSy0SRcAjNgZ2t_WGbrnjNbxPbIBpYJTjdeNgXyC-RBG24648nfoGOJKI7-z-iV9ZqxN3u_nIItvfIu9AaRJjgVKv9nisoKyCf94jsKBX8EqkT2rL_-wjwCYLPk2isCdZV1jXGFFnz6UUVGRp-rIo_j2ZNqEd5ijh_YklkwlzfzB6NunCf8bKmqCej1m8MxAuvtLVKzbgsVOVgvSa1efNj6rQy_XBz"
              />
            </div>
          </div>
        </section>

        {/* Feature Section (Bento Grid Style) */}
        <section id="features" className="py-24 px-6 md:px-12 bg-st-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 bg-white/50 backdrop-blur-sm p-6 rounded-2xl inline-block mx-auto border border-gray-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-st-dark mb-2">Everything You Need to Succeed</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A unified platform that brings your academic life into focus.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="lg:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-st-purple/10 flex items-center justify-center text-st-purple group-hover:bg-st-purple group-hover:text-white transition-colors mb-6">
                  <LayoutDashboard className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-st-dark mb-3">Centralized Course Info</h3>
                <p className="text-gray-600 leading-relaxed mb-8">Access all your syllabi, materials, and course updates in one streamlined dashboard.</p>
                <div className="mt-auto bg-gray-50 rounded-2xl p-4 flex-1 flex items-center justify-center border border-gray-100">
                    <div className="w-32 h-48 bg-white shadow-sm rounded-xl border border-gray-200 p-2 flex flex-col gap-2">
                        <div className="h-3 w-3/4 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded-full mb-2"></div>
                        <div className="flex-1 bg-st-purple/5 rounded-lg border border-st-purple/10"></div>
                    </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-st-lime flex items-center justify-center text-st-indigo group-hover:scale-110 transition-transform mb-6 shadow-sm">
                  <Bell className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-st-dark mb-3">Real-time Notifications</h3>
                <p className="text-gray-600 leading-relaxed">Never miss an assignment deadline or class update with instant push alerts.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 items-center group">
                <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-white group-hover:bg-st-purple transition-colors mb-6">
                    <Calendar className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-st-dark mb-3">Unified Academic Calendar</h3>
                    <p className="text-gray-600 leading-relaxed">View all your upcoming classes, exams, and homework deadlines synced across all your courses automatically.</p>
                </div>
                <div className="w-full md:w-64 h-40 bg-st-light rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden relative">
                     <div className="w-24 h-24 rounded-full bg-st-lime/30 absolute -right-4 -top-4 mix-blend-multiply blur-xl"></div>
                     <div className="w-24 h-24 rounded-full bg-st-purple/20 absolute -left-4 -bottom-4 mix-blend-multiply blur-xl"></div>
                     <Calendar className="h-16 w-16 text-st-dark/20 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-white flex flex-col items-center justify-center gap-6 px-6 md:px-12 border-t border-gray-100">
        <div className="text-2xl font-bold text-st-purple flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-st-lime" />
          SyllaSync
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-2">
          <a className="text-gray-500 hover:text-st-purple transition-colors cursor-pointer" href="#">Privacy Policy</a>
          <a className="text-gray-500 hover:text-st-purple transition-colors cursor-pointer" href="#">Terms of Service</a>
          <a className="text-gray-500 hover:text-st-purple transition-colors cursor-pointer" href="#">Accessibility</a>
          <a className="text-gray-500 hover:text-st-purple transition-colors cursor-pointer" href="#">Contact Support</a>
        </div>
        <div className="text-sm text-gray-400">
          © 2026 SyllaSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
