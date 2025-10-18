import React, { useState } from "react";
import { Send, FileText, User, CalendarDays } from "lucide-react";

export default function Schedule() {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [reportBody, setReportBody] = useState("");

  const patients = [
    { id: 1, name: "Ali Raza" },
    { id: 2, name: "Sara Khan" },
    { id: 3, name: "Hamza Ahmed" },
  ];

  const handleSendReport = () => {
    if (!selectedPatient || !reportTitle || !reportBody) {
      alert("Please fill all fields before sending the report.");
      return;
    }
    alert(`Report sent to ${selectedPatient}! ✅`);
    setSelectedPatient("");
    setReportTitle("");
    setReportBody("");
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Send Patient Reports</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          {new Date().toDateString()}
        </span>
      </div>

      {/* Main Container */}
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 space-y-6">
        {/* Select Patient */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Select Patient
          </label>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-indigo-600" />
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-indigo-600"
            >
              <option value="">-- Choose a patient --</option>
              {patients.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Report Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Report Title
          </label>
          <input
            type="text"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            placeholder="Enter report title..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-indigo-600"
          />
        </div>

        {/* Report Body */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Report Details
          </label>
          <textarea
            rows={6}
            value={reportBody}
            onChange={(e) => setReportBody(e.target.value)}
            placeholder="Write report details here..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 resize-none outline-none focus:border-indigo-600"
          />
        </div>

        {/* File Upload (optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Attach File (optional)
          </label>
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3">
            <FileText className="w-5 h-5 text-indigo-600" />
            <input type="file" className="text-sm text-gray-600 dark:text-gray-300" />
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSendReport}
            className="flex items-center gap-2 px-6 py-2 border border-indigo-700 text-white bg-indigo-700 hover:bg-indigo-800 transition"
          >
            <Send className="w-4 h-4" />
            Send Report
          </button>
        </div>
      </div>
    </div>
  );
}
