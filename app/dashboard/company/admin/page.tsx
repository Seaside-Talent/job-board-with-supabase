"use client";
import { User } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Alice Admin", email: "admin@acmehealth.com", role: "Admin" },
  { id: 2, name: "Bob Manager", email: "bob@acmehealth.com", role: "Manager" },
  { id: 3, name: "Carol Recruiter", email: "carol@acmehealth.com", role: "Recruiter" },
];

export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">User Administration</h2>
      <table className="min-w-full text-sm mb-4">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Email</th>
            <th className="px-4 py-2 text-left font-semibold">Role</th>
            <th className="px-4 py-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user, idx) => (
            <tr key={user.id} className={idx === 0 ? "bg-green-50" : ""}>
              <td className="px-4 py-2 font-medium">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}{idx === 0 && <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Admin</span>}</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline text-xs mr-2">Edit</button>
                {idx !== 0 && <button className="text-red-600 hover:underline text-xs">Remove</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">Invite User</button>
    </div>
  );
} 