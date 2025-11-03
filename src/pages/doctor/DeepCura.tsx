import React, { useState } from "react";
import { Bot, RefreshCw, Search } from "lucide-react";

const DeepCura: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);

    try {
      // 🔹 Later you’ll replace this with actual DeepCura API call
      // Example: const res = await fetch("https://api.deepcura.ai/v1/analyze", { ... })
      await new Promise((r) => setTimeout(r, 1200)); // mock delay
      setResponse(
        "DeepCura AI Analysis: Patient exhibits consistent stress indicators. Suggest scheduling an EEG follow-up and a mindfulness therapy session."
      );
    } catch (error) {
      setResponse("❌ Error fetching data from DeepCura API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-3">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Bot className="text-emerald-700" /> DeepCura AI Insights
        </h1>
      </div>

      {/* Input Section */}
      <div className="bg-white border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Query DeepCura AI
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter patient symptom, diagnosis, or note..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-gray-300 p-2 focus:border-emerald-600 outline-none"
          />
          <button
            onClick={handleQuery}
            disabled={loading}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 text-sm"
          >
            {loading ? <RefreshCw className="animate-spin w-4 h-4" /> : <Search size={16} />}
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {response && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-700 leading-relaxed">{response}</p>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-white border border-gray-200 p-5">
        <h2 className="font-semibold mb-2 text-gray-800">What is DeepCura?</h2>
        <p className="text-sm text-gray-600">
          DeepCura AI assists healthcare professionals by generating intelligent
          summaries and recommendations from patient data, EEG reports, and
          clinical notes. Soon, this section will pull real-time insights directly
          via the DeepCura API.
        </p>
      </div>
    </div>
  );
};

export default DeepCura;
