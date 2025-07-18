import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Users, Settings, FileText, Bell, Shield } from "lucide-react";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        {/* Avatar and name */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700 mb-2">
            {data?.claims?.user_metadata?.name?.[0]?.toUpperCase() || data?.claims?.email?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="text-xl font-bold text-blue-900 mb-1">{data?.claims?.user_metadata?.name || data?.claims?.email || "User"}</div>
          <div className="text-gray-600 text-sm mb-2">{data?.claims?.email}</div>
        </div>
        {/* User details table */}
        <div className="w-full bg-gray-50 rounded-lg p-6 mb-4 border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Role</td>
                <td className="py-2 text-gray-900">{data?.claims?.role || "authenticated"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Provider</td>
                <td className="py-2 text-gray-900">{data?.claims?.app_metadata?.provider || "-"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Session ID</td>
                <td className="py-2 text-gray-900 break-all">{data?.claims?.session_id || "-"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Email Verified</td>
                <td className="py-2 text-gray-900">{data?.claims?.user_metadata?.email_verified ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Anonymous</td>
                <td className="py-2 text-gray-900">{data?.claims?.is_anonymous ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">Auth Method</td>
                <td className="py-2 text-gray-900">{Array.isArray(data?.claims?.amr) ? data.claims.amr.map((m: any) => m.method).join(", ") : "-"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">App Metadata</td>
                <td className="py-2 text-gray-900"><pre className="whitespace-pre-wrap break-all text-xs bg-gray-100 rounded p-2">{JSON.stringify(data?.claims?.app_metadata, null, 2)}</pre></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-gray-700">User Metadata</td>
                <td className="py-2 text-gray-900"><pre className="whitespace-pre-wrap break-all text-xs bg-gray-100 rounded p-2">{JSON.stringify(data?.claims?.user_metadata, null, 2)}</pre></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full mt-4">
          <h2 className="font-bold text-lg mb-2">Next steps</h2>
          <div className="w-full space-y-3">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
              <Link href="/dashboard/company/job-postings" className="flex items-center gap-3 flex-1">
                <Plus className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Publish Your First Job</div>
                  <div className="text-sm text-gray-600">Create and post your first healthcare position</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
              <Link href="/dashboard/company/roles" className="flex items-center gap-3 flex-1">
                <Users className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Invite Coworkers</div>
                  <div className="text-sm text-gray-600">Add team members to help with hiring</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" />
              <Link href="/dashboard/company/settings" className="flex items-center gap-3 flex-1">
                <Settings className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Configure Workflows</div>
                  <div className="text-sm text-gray-600">Set up application review processes</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
              <Link href="/dashboard/company/admin" className="flex items-center gap-3 flex-1">
                <Shield className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-900">Manage Permissions</div>
                  <div className="text-sm text-gray-600">Control access and user roles</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
              <Link href="/jobs" className="flex items-center gap-3 flex-1">
                <FileText className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">Browse Open Roles</div>
                  <div className="text-sm text-gray-600">See what other companies are hiring</div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500" />
              <Link href="/dashboard/company/settings" className="flex items-center gap-3 flex-1">
                <Bell className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Set Up Notifications</div>
                  <div className="text-sm text-gray-600">Get alerts for new applications</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
