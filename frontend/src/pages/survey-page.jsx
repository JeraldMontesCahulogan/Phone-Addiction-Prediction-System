import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, ChevronRight, ChevronLeft } from "lucide-react";
import { toast } from "sonner"; // ✅ Sonner import
import { usePhoneAddictionDataStore } from "@/store/usePhoneAddictionDataStore.js";

const surveyQuestions = [
  { id: 1, key: "gender", question: "Gender", options: ["male", "female"] },
  {
    id: 2,
    key: "phone_use_hours",
    question: "How many hours do you use your phone daily?",
    options: [
      "less than 2 hours",
      "2 to 4 hours",
      "5 to 7 hours",
      "8 to 10 hours",
      "more than 10 hours",
    ],
  },
  {
    id: 3,
    key: "sleep_hours",
    question: "How many hours do you usually sleep per day?",
    options: [
      "less than 4 hours",
      "4 to 6 hours",
      "7 to 8 hours",
      "more than 8 hours",
    ],
  },
  {
    id: 4,
    key: "person_interaction",
    question:
      "How often do you interact with people face-to-face (friends, family, classmates, etc.)?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 5,
    key: "social_media_hours",
    question: "How much time do you spend on social media daily?",
    options: [
      "less than 1 hour",
      "1 to 3 hours",
      "4 to 6 hours",
      "7 to 9 hours",
      "more than 9 hours",
    ],
  },
  {
    id: 6,
    key: "gaming_hours",
    question: "How much time do you spend on gaming daily?",
    options: [
      "less than 1 hour",
      "1 to 3 hours",
      "4 to 6 hours",
      "7 to 9 hours",
      "more than 9 hours",
    ],
  },
  {
    id: 7,
    key: "educational_hours",
    question:
      "How much time do you spend on educational activities (online learning, schoolwork, research, etc.) daily?",
    options: [
      "less than 1 hour",
      "1 to 3 hours",
      "4 to 6 hours",
      "7 to 9 hours",
      "more than 9 hours",
    ],
  },
  {
    id: 8,
    key: "family_communication",
    question: "How often do you communicate with your family?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 9,
    key: "phone_anxiety",
    question:
      "How often do you feel anxious or uneasy when you are away from your phone?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 10,
    key: "phone_during_meals",
    question: "Do you use your phone during meals or social gatherings?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 11,
    key: "lose_track_time",
    question: "Do you lose track of time while using your phone?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 12,
    key: "performance_impact",
    question:
      " Have your academic or work performance been affected by your phone use?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 13,
    key: "phone_before_sleep",
    question: "Do you use your phone right before sleeping?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
  {
    id: 14,
    key: "phone_after_wakeup",
    question:
      "Do you feel the need to check your phone immediately after waking up?",
    options: ["always", "often", "sometimes", "rarely", "never"],
  },
];

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState({});
  const navigate = useNavigate();
  const { createPhoneAddictionData } = usePhoneAddictionDataStore();

  const current = surveyQuestions[currentStep];
  const progress = ((currentStep + 1) / surveyQuestions.length) * 100;

  // ✅ Store each answer in surveyData
  const handleSelect = (option) => {
    setSurveyData((prev) => ({
      ...prev,
      [current.key]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < surveyQuestions.length - 1)
      setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // ✅ Show toast and redirect after submit
  const handleSubmit = () => {
    console.log("📋 Survey Data:", surveyData);
    localStorage.setItem("surveyResponses", JSON.stringify(surveyData));
    createPhoneAddictionData(surveyData);

    toast.success("Survey submitted successfully!", {
      description: "Redirecting to your dashboard...",
      duration: 3000,
    });

    setTimeout(() => navigate("/dashboard"), 3000);
  };

  const isAnswered = !!surveyData[current.key];
  const isLastQuestion = currentStep === surveyQuestions.length - 1;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Brain className="h-6 w-6 text-emerald-500" />
            <h1 className="text-xl font-bold text-white">MindLink</h1>
          </Link>
          <div className="text-sm text-slate-400">
            Question {currentStep + 1} of {surveyQuestions.length}
          </div>
        </div>
      </nav>

      {/* Main Survey Section */}
      <main className="flex items-center justify-center px-6 py-12 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-slate-300">
                Survey Progress
              </h2>
              <span className="text-xs text-slate-500">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {current.question}
            </h3>

            <div className="space-y-2">
              {current.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    surveyData[current.key] === option
                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-300"
                      : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                    <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                      {surveyData[current.key] === option && (
                        <div className="w-3 h-3 bg-current rounded-full" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                disabled={!isAnswered}
                className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
              >
                Complete Survey
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Please answer all questions to continue
          </p>
        </div>
      </main>
    </div>
  );
}
