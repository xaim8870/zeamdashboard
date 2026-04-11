import { useState } from "react";
import { FileText, Plus, Trash2 } from "lucide-react";

interface Protocol {
  id: number;
  name: string;
  description: string;
  duration: string;
  samplingRate: string;
  channels: string;
  status: "active" | "inactive";
}

export default function ResearchProtocols() {
  const [showForm, setShowForm] = useState(false);
  const [protocols, setProtocols] = useState<Protocol[]>([
    {
      id: 1,
      name: "Resting State",
      description: "Baseline eyes open and eyes closed recording",
      duration: "10 min",
      samplingRate: "256 Hz",
      channels: "8",
      status: "active",
    },
    {
      id: 2,
      name: "Focus Task",
      description: "Task-based attention and concentration protocol",
      duration: "15 min",
      samplingRate: "256 Hz",
      channels: "8",
      status: "active",
    },
  ]);

  const [newProtocol, setNewProtocol] = useState({
    name: "",
    description: "",
    duration: "",
    samplingRate: "",
    channels: "",
    status: "active" as "active" | "inactive",
  });

  const handleAddProtocol = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newProtocol.name || !newProtocol.description) {
      alert("Please fill all required fields.");
      return;
    }

    setProtocols((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newProtocol,
      },
    ]);

    setNewProtocol({
      name: "",
      description: "",
      duration: "",
      samplingRate: "",
      channels: "",
      status: "active",
    });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setProtocols((prev) => prev.filter((protocol) => protocol.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
            Research Protocols
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Configure EEG protocols for Mentalab sessions.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Cancel" : "Add Protocol"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddProtocol}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <FileText className="w-5 h-5" /> Create New Protocol
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Protocol Name"
              value={newProtocol.name}
              onChange={(e) => setNewProtocol({ ...newProtocol, name: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Duration"
              value={newProtocol.duration}
              onChange={(e) => setNewProtocol({ ...newProtocol, duration: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Sampling Rate"
              value={newProtocol.samplingRate}
              onChange={(e) => setNewProtocol({ ...newProtocol, samplingRate: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Channels"
              value={newProtocol.channels}
              onChange={(e) => setNewProtocol({ ...newProtocol, channels: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            />
            <select
              value={newProtocol.status}
              onChange={(e) =>
                setNewProtocol({
                  ...newProtocol,
                  status: e.target.value as "active" | "inactive",
                })
              }
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              value={newProtocol.description}
              onChange={(e) => setNewProtocol({ ...newProtocol, description: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3 outline-none md:col-span-2"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
            >
              Save Protocol
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocols.map((protocol) => (
          <div
            key={protocol.id}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{protocol.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {protocol.description}
                </p>
              </div>
              <span className="text-xs px-3 py-1 border border-emerald-700 text-emerald-700 capitalize">
                {protocol.status}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-semibold">Duration:</span> {protocol.duration}</p>
              <p><span className="font-semibold">Sampling Rate:</span> {protocol.samplingRate}</p>
              <p><span className="font-semibold">Channels:</span> {protocol.channels}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleDelete(protocol.id)}
                className="text-xs px-3 py-1 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition flex items-center"
              >
                <Trash2 className="w-3 h-3 mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}