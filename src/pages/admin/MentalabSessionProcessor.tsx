import { useMemo, useState } from "react";
import { processMentalabSession } from "../../services/eeg";
import type { ProcessMentalabResponse } from "../../types/eeg";

type UploadFiles = {
  exg: File | null;
  meta: File | null;
  marker: File | null;
  orn: File | null;
};

type PatientForm = {
  patientName: string;
  patientId: string;
  age: string;
  gender: string;
  notes: string;
};

function ScoreCard({
  label,
  value,
}: {
  label: string;
  value: number | null | undefined;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
      <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {value == null ? "-" : Math.round(value)}
      </div>
    </div>
  );
}

export default function MentalabSessionProcessor() {
  const [files, setFiles] = useState<UploadFiles>({
    exg: null,
    meta: null,
    marker: null,
    orn: null,
  });

  const [form, setForm] = useState<PatientForm>({
    patientName: "",
    patientId: "",
    age: "",
    gender: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ProcessMentalabResponse | null>(null);

  const canSubmit = useMemo(() => {
    return Boolean(files.exg && files.meta);
  }, [files]);

  function updateFile<K extends keyof UploadFiles>(key: K, file: File | null) {
    setFiles((prev) => ({ ...prev, [key]: file }));
  }

  function updateForm<K extends keyof PatientForm>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!files.exg || !files.meta) {
      setError("ExG and Meta files are required.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const fd = new FormData();
      fd.append("exg", files.exg);
      fd.append("meta", files.meta);
      if (files.marker) fd.append("marker", files.marker);
      if (files.orn) fd.append("orn", files.orn);

      if (form.patientName) fd.append("patientName", form.patientName);
      if (form.patientId) fd.append("patientId", form.patientId);
      if (form.age) fd.append("age", form.age);
      if (form.gender) fd.append("gender", form.gender);
      if (form.notes) fd.append("notes", form.notes);

      const response = await processMentalabSession(fd);
      setResult(response);
    } catch (err: any) {
      setError(err?.message || "Processing failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
            Process Mentalab Session
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Upload Mentalab EEG files, submit patient details, and inspect session-level
            and window-level processing results.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold">Patient Information</h2>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Patient Name</label>
                <input
                  value={form.patientName}
                  onChange={(e) => updateForm("patientName", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                  placeholder="Enter patient name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Patient ID</label>
                <input
                  value={form.patientId}
                  onChange={(e) => updateForm("patientId", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                  placeholder="Enter patient ID"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Age</label>
                  <input
                    value={form.age}
                    onChange={(e) => updateForm("age", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                    placeholder="Age"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">Gender</label>
                  <input
                    value={form.gender}
                    onChange={(e) => updateForm("gender", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                    placeholder="Gender"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => updateForm("notes", e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                  placeholder="Optional notes"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold">Mentalab Files</h2>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  ExG CSV <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => updateFile("exg", e.target.files?.[0] || null)}
                  className="block w-full text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Meta CSV <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => updateFile("meta", e.target.files?.[0] || null)}
                  className="block w-full text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Marker CSV</label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => updateFile("marker", e.target.files?.[0] || null)}
                  className="block w-full text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">ORN CSV</label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => updateFile("orn", e.target.files?.[0] || null)}
                  className="block w-full text-sm"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Processing..." : "Process Session"}
              </button>

              {!canSubmit && (
                <span className="text-sm text-gray-500">
                  ExG and Meta files are required.
                </span>
              )}
            </div>

            {error && (
              <div className="mt-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-300">
                {error}
              </div>
            )}
          </div>
        </form>

        {result && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              <ScoreCard label="Calm" value={result.result.sessionScores.calm} />
              <ScoreCard label="Focus" value={result.result.sessionScores.focus} />
              <ScoreCard label="Stress" value={result.result.sessionScores.stress} />
              <ScoreCard label="Confidence" value={result.result.sessionScores.confidence} />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold">Session Summary</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Session ID:</span> {result.result.sessionId}</div>
                  <div><span className="font-semibold">Device:</span> {result.result.device}</div>
                  <div><span className="font-semibold">Sampling Rate:</span> {result.result.samplingRate} Hz</div>
                  <div><span className="font-semibold">Total Windows:</span> {result.result.totalWindows}</div>
                  <div><span className="font-semibold">Valid Windows:</span> {result.result.validWindows}</div>
                  <div><span className="font-semibold">Invalid Windows:</span> {result.result.invalidWindows}</div>
                  <div><span className="font-semibold">Pipeline Version:</span> {result.result.version.pipelineVersion}</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold">Quality Summary</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">Mean SQI:</span>{" "}
                    {result.result.qualitySummary.meanSQI == null
                      ? "-"
                      : result.result.qualitySummary.meanSQI.toFixed(3)}
                  </div>
                  <div>
                    <span className="font-semibold">Valid Window Fraction:</span>{" "}
                    {(result.result.qualitySummary.validWindowFraction * 100).toFixed(1)}%
                  </div>
                  <div>
                    <span className="font-semibold">Bad Channels:</span>{" "}
                    {result.result.qualitySummary.badChannelsUnion.length
                      ? result.result.qualitySummary.badChannelsUnion.join(", ")
                      : "None"}
                  </div>
                  <div>
                    <span className="font-semibold">Warnings:</span>{" "}
                    {result.result.qualitySummary.warnings.length
                      ? result.result.qualitySummary.warnings.join(", ")
                      : "None"}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold">Upload Summary</h3>
              <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                <div><span className="font-semibold">ExG:</span> {result.upload.exg}</div>
                <div><span className="font-semibold">Meta:</span> {result.upload.meta}</div>
                <div><span className="font-semibold">Marker:</span> {result.upload.marker || "Not provided"}</div>
                <div><span className="font-semibold">ORN:</span> {result.upload.orn || "Not provided"}</div>
                <div><span className="font-semibold">Patient Name:</span> {result.patient.patientName || "-"}</div>
                <div><span className="font-semibold">Patient ID:</span> {result.patient.patientId || "-"}</div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold">Window Debug Table</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-left dark:border-gray-700">
                      <th className="px-3 py-2">#</th>
                      <th className="px-3 py-2">Start</th>
                      <th className="px-3 py-2">End</th>
                      <th className="px-3 py-2">SQI</th>
                      <th className="px-3 py-2">Rejected</th>
                      <th className="px-3 py-2">Alpha</th>
                      <th className="px-3 py-2">Beta</th>
                      <th className="px-3 py-2">Theta/Beta</th>
                      <th className="px-3 py-2">Calm</th>
                      <th className="px-3 py-2">Focus</th>
                      <th className="px-3 py-2">Stress</th>
                      <th className="px-3 py-2">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.result.windowResults.map((row) => (
                      <tr
                        key={row.window.index}
                        className="border-b border-gray-100 dark:border-gray-800"
                      >
                        <td className="px-3 py-2">{row.window.index}</td>
                        <td className="px-3 py-2">{row.window.startTs.toFixed(3)}</td>
                        <td className="px-3 py-2">{row.window.endTs.toFixed(3)}</td>
                        <td className="px-3 py-2">
                          {row.sqi?.score01 == null ? "-" : row.sqi.score01.toFixed(3)}
                        </td>
                        <td className="px-3 py-2">
                          {row.sqi?.rejected ? "Yes" : "No"}
                        </td>
                        <td className="px-3 py-2">
                          {row.features?.aggregate.bandRelMean.alpha?.toFixed?.(4) ?? "-"}
                        </td>
                        <td className="px-3 py-2">
                          {row.features?.aggregate.bandRelMean.beta?.toFixed?.(4) ?? "-"}
                        </td>
                        <td className="px-3 py-2">
                          {row.features?.aggregate.ratiosMean.thetaBeta?.toFixed?.(4) ?? "-"}
                        </td>
                        <td className="px-3 py-2">
                          {row.scores?.calm == null ? "-" : Math.round(row.scores.calm)}
                        </td>
                        <td className="px-3 py-2">
                          {row.scores?.focus == null ? "-" : Math.round(row.scores.focus)}
                        </td>
                        <td className="px-3 py-2">
                          {row.scores?.stress == null ? "-" : Math.round(row.scores.stress)}
                        </td>
                        <td className="px-3 py-2">
                          {row.scores?.confidence == null
                            ? "-"
                            : Math.round(row.scores.confidence)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}