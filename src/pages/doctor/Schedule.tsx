// src/pages/doctor/Schedule.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, FileUp, UserRound } from "lucide-react";

const patients = [
  { id: 1, name: "Ali Khan" },
  { id: 2, name: "Sara Ahmed" },
  { id: 3, name: "John Doe" },
];

export default function DoctorReports() {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const tagOptions = ["Focus", "Calmness", "Sleep", "Stress", "Attention"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🚀 Send data to backend
    const formData = new FormData();
    formData.append("patientId", selectedPatient);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", JSON.stringify(tags));
    if (file) formData.append("attachment", file);

    console.log("📤 Report submitted:", {
      selectedPatient,
      title,
      description,
      tags,
      file,
    });

    // Here you’ll call API: await axios.post(`${API_URL}/doctor/report`, formData)
    alert("Report successfully sent to patient!");
    setSelectedPatient("");
    setTitle("");
    setDescription("");
    setTags([]);
    setFile(null);
  };

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <UserRound className="w-6 h-6 text-indigo-600" /> Doctor's Reports
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select Patient */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Select Patient
            </label>
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="">-- Choose a patient --</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Report Title */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Report Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Sleep pattern improvement observed"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Report Description */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Report Details
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Write detailed insights or EEG summary..."
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Insight Tags */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Insights Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tagOptions.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    tags.includes(tag)
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Attach File (optional)
            </label>
            <label className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg px-4 py-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <FileUp className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-600 dark:text-gray-300">
                {file ? file.name : "Upload report or EEG file"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            <Send className="w-5 h-5" /> Submit Report
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
