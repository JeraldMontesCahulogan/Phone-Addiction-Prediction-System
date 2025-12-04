// import React, { useEffect } from "react";
import { Brain, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
// import { usePhoneAddictionDataStore } from "@/store/usePhoneAddictionDataStore";

const LandingPage = () => {
  // const { fetchAllData } = usePhoneAddictionDataStore();

  // useEffect(() => {
  //   fetchAllData();
  // }, [fetchAllData]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-emerald-500" />
            <h1 className="text-xl font-bold text-white">MindLink</h1>
          </div>
          <div className="flex gap-6">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <LineChart className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="/survey"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Brain className="h-4 w-4" />
              Survey
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Understand Your Phone Addiction
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Take our comprehensive survey to analyze your mobile phone usage
            patterns and get insights into your digital habits.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/survey"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              Start Survey
            </Link>
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Analytics
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
