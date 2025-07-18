"use client";
import { useState } from "react";
import { Plus, FileText, ExternalLink, Users, Edit, Trash, Briefcase, CheckCircle } from "lucide-react";

const mockRoles = [
  {
    id: 1,
    title: "IT Technician",
    description: "<b>Maintain IT systems</b> and provide support. <ul><li>Install software</li><li>Manage hardware</li></ul>",
    status: "Approved",
    postingDestinations: ["LinkedIn", "Indeed", "Job Board"],
    permissions: ["view", "edit", "approve", "post"],
    employees: ["Jane Doe", "John Smith"],
    applicants: 3,
  },
  {
    id: 2,
    title: "Sales Manager",
    description: "Lead the sales team and manage client relationships.",
    status: "Draft",
    postingDestinations: ["LinkedIn", "Job Board"],
    permissions: ["view", "edit"],
    employees: ["Alice Lee"],
    applicants: 1,
  },
];

export default function RolesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<typeof mockRoles[0] | null>(null);
  const [desc, setDesc] = useState("");

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">Roles (Position Templates)</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700" onClick={() => { setSelected(null); setDesc(""); setShowModal(true); }}><Plus className="h-4 w-4" /> New Role</button>
      </div>
      <ul className="divide-y divide-blue-50">
        {mockRoles.map(role => (
          <li key={role.id} className="py-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900 text-lg">{role.title}</span>
                <span className={`ml-2 text-xs px-2 py-1 rounded-full font-bold ${role.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{role.status}</span>
              </div>
              <div className="text-gray-700 text-sm mb-2" dangerouslySetInnerHTML={{ __html: role.description }} />
              <div className="flex flex-wrap gap-2 mb-2">
                {role.postingDestinations.map(dest => (
                  <span key={dest} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs flex items-center gap-1"><ExternalLink className="h-3 w-3" /> {dest}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {role.permissions.map(perm => (
                  <span key={perm} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{perm}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2 items-center">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-gray-600">Employees: {role.employees.join(", ")}</span>
                <span className="ml-4 text-xs text-gray-500">Applicants: {role.applicants}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-xs font-semibold" onClick={() => { setSelected(role); setDesc(role.description); setShowModal(true); }}><Edit className="h-4 w-4" /> Edit</button>
              <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-xs font-semibold"><Trash className="h-4 w-4" /> Delete</button>
              <button className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-xs font-semibold"><Briefcase className="h-4 w-4" /> Post Job</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Modal for Create/Edit */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setShowModal(false)}><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
            <h2 className="text-xl font-bold mb-4">{selected ? "Edit" : "New"} Role Template</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input className="w-full border px-3 py-2 rounded" defaultValue={selected?.title || ""} placeholder="e.g. IT Technician" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description (Rich Text)</label>
                <div
                  className="w-full border px-3 py-2 rounded min-h-[80px] bg-gray-50"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={e => setDesc((e.target as HTMLElement).innerHTML)}
                  dangerouslySetInnerHTML={{ __html: desc }}
                  aria-label="Role Description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Posting Destinations</label>
                <input className="w-full border px-3 py-2 rounded" defaultValue={selected?.postingDestinations?.join(", ") || ""} placeholder="e.g. LinkedIn, Indeed, Job Board" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Permissions</label>
                <input className="w-full border px-3 py-2 rounded" defaultValue={selected?.permissions?.join(", ") || ""} placeholder="e.g. view, edit, approve, post" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Employees (history)</label>
                <input className="w-full border px-3 py-2 rounded" defaultValue={selected?.employees?.join(", ") || ""} placeholder="e.g. Jane Doe, John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Applicants (ATS)</label>
                <input className="w-full border px-3 py-2 rounded" defaultValue={selected?.applicants?.toString() || ""} placeholder="e.g. 3" />
              </div>
              <div className="flex gap-2 mt-4">
                <button type="button" className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">Save</button>
                <button type="button" className="px-6 py-2 bg-gray-100 text-gray-700 rounded font-semibold hover:bg-gray-200" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 