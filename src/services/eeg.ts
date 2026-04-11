import type { ProcessMentalabResponse } from "../types/eeg";

const API_BASE = "https://compass-zeam-backend.onrender.com"; // link of the port where backend is running

export async function processMentalabSession(
  formData: FormData
): Promise<ProcessMentalabResponse> {
  const res = await fetch(`${API_BASE}/admin/eeg/process-mentalab`, {
    method: "POST",
    body: formData,
  });

  const rawText = await res.text();

  let json: any = null;
  try {
    json = rawText ? JSON.parse(rawText) : null;
  } catch {
    throw new Error(
      `Backend returned invalid JSON. Status: ${res.status}. Body: ${rawText || "<empty>"}`
    );
  }

  if (!res.ok || !json?.ok) {
    throw new Error(json?.error || `Request failed with status ${res.status}`);
  }

  return json as ProcessMentalabResponse;
}