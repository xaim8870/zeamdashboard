import { useState } from "react";
import { Edit3, Trash2, Shield, Plus, UserPlus, Mail, Lock } from "lucide-react";

export default function ManageUsers() {
  const [activeTab, setActiveTab] = useState<"doctor" | "staff" | "admin">("doctor");
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const users = {
    doctor: [
      { id: 1, name: "Dr. Usama", email: "usama@zeamhealth.com" },
      { id: 2, name: "Dr. Sara Khan", email: "sara@zeamhealth.com" },
    ],
    staff: [
      { id: 1, name: "Ali Raza", email: "ali@zeamhealth.com" },
      { id: 2, name: "Zain Malik", email: "zain@zeamhealth.com" },
    ],
    admin: [
      { id: 1, name: "Admin Ahsan", email: "ahsan@zeamhealth.com" },
    ],
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("Please fill all fields before saving.");
      return;
    }
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} added successfully!`);
    setNewUser({ name: "", email: "", password: "" });
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
          Manage Users
        </h1>

        <div className="flex gap-3 mt-3 md:mt-0">
          {["doctor", "staff", "admin"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "doctor" | "staff" | "admin");
                setShowForm(false);
              }}
              className={`px-4 py-2 border text-sm font-medium uppercase tracking-wide ${
                activeTab === tab
                  ? "bg-emerald-700 text-white border-emerald-800"
                  : "bg-transparent border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Add User Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
        >
          <Plus className="w-4 h-4" /> Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
      </div>

      {/* Add User Form */}
      {showForm && (
        <form
          onSubmit={handleAddUser}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <UserPlus className="w-5 h-5" /> Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-2">
                <Shield className="w-4 h-4 text-emerald-700 mr-2" />
                <input
                  type="text"
                  placeholder="e.g., Dr. Ayesha Malik"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full p-2 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-2">
                <Mail className="w-4 h-4 text-emerald-700 mr-2" />
                <input
                  type="email"
                  placeholder="e.g., user@zeamhealth.com"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full p-2 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-2">
                <Lock className="w-4 h-4 text-emerald-700 mr-2" />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full p-2 bg-transparent outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
            >
              Save {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </button>
          </div>
        </form>
      )}

      {/* User Table */}
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">#</th>
              <th className="py-3 px-4 text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-sm font-semibold">Email</th>
              <th className="py-3 px-4 text-sm font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users[activeTab].map((user, i) => (
              <tr
                key={user.id}
                className={`border-b border-gray-200 dark:border-gray-700 ${
                  i % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <td className="py-3 px-4 text-sm">{user.id}</td>
                <td className="py-3 px-4 text-sm font-medium">{user.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-xs px-3 py-1 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white mr-2 transition">
                    <Edit3 className="inline-block w-3 h-3 mr-1" /> Edit
                  </button>
                  <button className="text-xs px-3 py-1 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition">
                    <Trash2 className="inline-block w-3 h-3 mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
