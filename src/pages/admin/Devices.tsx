import { useState } from "react";
import { Cpu, Plus, Trash2, Edit3 } from "lucide-react";

type DeviceStatus = "active" | "inactive" | "assigned" | "maintenance";

interface Device {
  id: number;
  name: string;
  serialNumber: string;
  model: string;
  status: DeviceStatus;
  assignedTo: string;
  lastSeen: string;
}

export default function Devices() {
  const [showForm, setShowForm] = useState(false);
  const [devices, setDevices] = useState<Device[]>([
    {
      id: 1,
      name: "Mentalab Explore A",
      serialNumber: "ML-EXP-001",
      model: "Explore Pro",
      status: "active",
      assignedTo: "Dr. Usama",
      lastSeen: "2026-04-02",
    },
    {
      id: 2,
      name: "Mentalab Explore B",
      serialNumber: "ML-EXP-002",
      model: "Explore Pro",
      status: "assigned",
      assignedTo: "Patient #104",
      lastSeen: "2026-04-01",
    },
  ]);

  const [newDevice, setNewDevice] = useState({
    name: "",
    serialNumber: "",
    model: "",
    status: "active" as DeviceStatus,
    assignedTo: "",
    lastSeen: "",
  });

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newDevice.name || !newDevice.serialNumber || !newDevice.model) {
      alert("Please fill all required fields.");
      return;
    }

    const device: Device = {
      id: devices.length + 1,
      ...newDevice,
      lastSeen: newDevice.lastSeen || "Not Available",
    };

    setDevices((prev) => [...prev, device]);
    setNewDevice({
      name: "",
      serialNumber: "",
      model: "",
      status: "active",
      assignedTo: "",
      lastSeen: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setDevices((prev) => prev.filter((device) => device.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
            Devices
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Register and manage Mentalab EEG hardware.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Cancel" : "Add Device"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddDevice}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <Cpu className="w-5 h-5" /> Register New Device
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Device Name"
              value={newDevice.name}
              onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Serial Number"
              value={newDevice.serialNumber}
              onChange={(e) => setNewDevice({ ...newDevice, serialNumber: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Model"
              value={newDevice.model}
              onChange={(e) => setNewDevice({ ...newDevice, model: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Assigned To"
              value={newDevice.assignedTo}
              onChange={(e) => setNewDevice({ ...newDevice, assignedTo: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="date"
              value={newDevice.lastSeen}
              onChange={(e) => setNewDevice({ ...newDevice, lastSeen: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <select
              value={newDevice.status}
              onChange={(e) => setNewDevice({ ...newDevice, status: e.target.value as DeviceStatus })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="assigned">Assigned</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
            >
              Save Device
            </button>
          </div>
        </form>
      )}

      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">#</th>
              <th className="py-3 px-4 text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-sm font-semibold">Serial</th>
              <th className="py-3 px-4 text-sm font-semibold">Model</th>
              <th className="py-3 px-4 text-sm font-semibold">Status</th>
              <th className="py-3 px-4 text-sm font-semibold">Assigned To</th>
              <th className="py-3 px-4 text-sm font-semibold">Last Seen</th>
              <th className="py-3 px-4 text-sm font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, i) => (
              <tr
                key={device.id}
                className={`border-b border-gray-200 dark:border-gray-700 ${
                  i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <td className="py-3 px-4 text-sm">{device.id}</td>
                <td className="py-3 px-4 text-sm font-medium">{device.name}</td>
                <td className="py-3 px-4 text-sm">{device.serialNumber}</td>
                <td className="py-3 px-4 text-sm">{device.model}</td>
                <td className="py-3 px-4 text-sm capitalize">{device.status}</td>
                <td className="py-3 px-4 text-sm">{device.assignedTo || "-"}</td>
                <td className="py-3 px-4 text-sm">{device.lastSeen}</td>
                <td className="py-3 px-4 text-center flex justify-center gap-2">
                  <button className="text-xs px-3 py-1 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition flex items-center">
                    <Edit3 className="w-3 h-3 mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(device.id)}
                    className="text-xs px-3 py-1 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition flex items-center"
                  >
                    <Trash2 className="w-3 h-3 mr-1" /> Delete
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