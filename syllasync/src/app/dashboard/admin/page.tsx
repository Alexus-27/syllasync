import { Users, BookOpen, Activity, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminOverview() {
  return (
    <div className="p-8 bg-st-light min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-st-dark">Admin Overview</h1>
          <p className="text-gray-500 mt-1">Manage system configurations and users.</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-st-purple/10 flex items-center justify-center text-st-purple">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Total Users</p>
            <h3 className="text-2xl font-bold text-st-dark">12,458</h3>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-st-lime/20 flex items-center justify-center text-st-indigo">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">Active Courses</p>
            <h3 className="text-2xl font-bold text-st-dark">842</h3>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <Activity className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1">System Health</p>
            <h3 className="text-2xl font-bold text-st-dark">99.9%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-st-dark">Recent User Registrations</h2>
            <button className="text-sm text-st-purple font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Name</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Role</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 text-sm font-medium text-st-dark">Jane Doe</td>
                  <td className="py-4 px-6 text-sm text-gray-600">Student</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-st-purple hover:underline text-sm font-medium">Manage</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 text-sm font-medium text-st-dark">Alan Smith</td>
                  <td className="py-4 px-6 text-sm text-gray-600">Professor</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-st-purple hover:underline text-sm font-medium">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* System Announcements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-st-dark mb-6">System Announcements</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-st-purple/5 border border-st-purple/10">
              <AlertCircle className="h-6 w-6 text-st-purple shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-st-dark text-sm">Scheduled Maintenance</h4>
                <p className="text-xs text-gray-500 mt-1">System will be offline on Sunday 2:00 AM - 4:00 AM KST.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-st-light border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-st-dark text-sm">Update v2.1 Deployed</h4>
                <p className="text-xs text-gray-500 mt-1">New grading features have been successfully rolled out.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Create Announcement
          </button>
        </div>
      </div>
    </div>
  );
}
