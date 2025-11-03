import React, { useState } from "react";

// Icons
import { Brain } from "lucide-react";

// 🧩 Modular Components
import EEGSetup from "../../components/doctor/EEGSetup";
import EEGQuestionnaire from "../../components/doctor/EEGQuestionnaire";
import EEGLiveSession from "../../components/doctor/EEGLiveSession";
import EEGSummary from "../../components/doctor/EEGSummary";

/* ==========================================================
   EEGPage — Full In-Clinic EEG Workflow
========================================================== */
const EEGPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<
    "setup" | "pre" | "live" | "post" | "summary"
  >("setup");

  // ---------- Shared State ----------
  const [selectedDevice, setSelectedDevice] = useState("Muse S Athena");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [questions, setQuestions] = useState([
    { id: 1, text: "How are you feeling before the session?", type: "short" },
  ]);

  /* ==========================================================
     STEP 1 — Setup
  =========================================================== */
  if (currentStep === "setup")
    return (
      <EEGSetup
        selectedDevice={selectedDevice}
        setSelectedDevice={setSelectedDevice}
        selectedPatient={selectedPatient}
        setSelectedPatient={setSelectedPatient}
        questions={questions}
        setQuestions={setQuestions}
        onNext={() => setCurrentStep("pre")}
      />
    );

  /* ==========================================================
     STEP 2 — Pre-Session Questionnaire
  =========================================================== */
  if (currentStep === "pre")
    return (
      <EEGQuestionnaire
        title="Pre-Session Questionnaire"
        questions={questions}
        onNext={() => setCurrentStep("live")}
      />
    );

  /* ==========================================================
     STEP 3 — Live EEG Session
  =========================================================== */
  if (currentStep === "live")
    return (
      <EEGLiveSession
        device={selectedDevice}
        onNext={() => setCurrentStep("post")}
      />
    );

  /* ==========================================================
     STEP 4 — Post-Session Questionnaire
  =========================================================== */
  if (currentStep === "post")
    return (
      <EEGQuestionnaire
        title="Post-Session Questionnaire"
        questions={questions}
        onNext={() => setCurrentStep("summary")}
      />
    );

  /* ==========================================================
     STEP 5 — Summary
  =========================================================== */
  if (currentStep === "summary")
    return (
      <EEGSummary
        patientId={selectedPatient}
        device={selectedDevice}
        onRestart={() => setCurrentStep("setup")}
      />
    );

  return (
    <div className="p-6 bg-[#f8f9fa] text-gray-800 min-h-screen flex flex-col items-center justify-center">
      <Brain className="text-emerald-700 w-10 h-10 mb-4" />
      <p className="text-gray-600">Loading EEG Workflow...</p>
    </div>
  );
};

export default EEGPage;
