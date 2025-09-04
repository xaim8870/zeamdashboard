import React, { useState } from "react";

const AiScribe: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
          AI Scribe (DeepCura)
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Upload patient visit audio and generate AI-powered transcripts & notes.
        </p>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg text-center mb-6">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
            id="audio-upload"
          />
          <label
            htmlFor="audio-upload"
            className="cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            {file ? "Change Audio File" : "Upload Audio File"}
          </label>
          {file && <p className="mt-3 text-gray-700 dark:text-gray-300">{file.name}</p>}
        </div>

        {/* Placeholder for AI Result */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold mb-3">Generated Transcript & Notes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {file
              ? "Transcript will appear here after processing with DeepCura API."
              : "Please upload an audio file to begin."}
          </p>
        </div>

        {/* Future Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-colors duration-200">
            Save Notes
          </button>
          <button className="bg-gray-600 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
            Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiScribe;
