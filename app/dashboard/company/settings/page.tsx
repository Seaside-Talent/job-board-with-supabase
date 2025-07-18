"use client";

import { useState } from "react";
import Image from "next/image";

const mockCompany = {
  name: "Acme Health",
  logo: "https://placehold.co/64x64",
  description: "Leading provider of healthcare services in Boston.",
  contact: "info@acmehealth.com",
  address: "123 Main St, Boston, MA",
};

export default function CompanySettingsPage() {
  const [company, setCompany] = useState(mockCompany);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Company Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={company.name}
            onChange={e => setCompany({ ...company, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Logo URL</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={company.logo}
            onChange={e => setCompany({ ...company, logo: e.target.value })}
          />
          <Image src={company.logo} alt="logo" width={64} height={64} className="w-16 h-16 rounded-full border mt-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows={3}
            value={company.description}
            onChange={e => setCompany({ ...company, description: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contact Email</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={company.contact}
            onChange={e => setCompany({ ...company, contact: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={company.address}
            onChange={e => setCompany({ ...company, address: e.target.value })}
          />
        </div>
        <button type="button" className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 mt-2">Save Settings</button>
      </form>
    </div>
  );
} 