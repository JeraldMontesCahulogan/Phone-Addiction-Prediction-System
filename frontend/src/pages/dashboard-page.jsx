import { useEffect, useState } from "react";
import MetricsCards from "@/components/metrics-cards";
import OverallAddictionRate from "@/components/charts/overall-addiction-rate";
import GenderVsAddiction from "@/components/charts/gender-vs-addiction";
import DailyUsageDistribution from "@/components/charts/daily-usage-distribution";
import DailyUsageVsRisk from "@/components/charts/daily-usage-vs-risk";
import SleepDistribution from "@/components/charts/sleep-distribution";
import SleepVsRisk from "@/components/charts/sleep-vs-risk";
import InteractionFrequency from "@/components/charts/interaction-frequency";
import InteractionVsRisk from "@/components/charts/interaction-vs-risk";
import SocialMediaUsage from "@/components/charts/social-media-usage";
import SocialMediaVsRisk from "@/components/charts/social-media-vs-risk";
import GamingUsage from "@/components/charts/gaming-usage";
import GamingVsRisk from "@/components/charts/gaming-vs-risk";
import EducationalUsage from "@/components/charts/educational-usage";
import EducationalVsRisk from "@/components/charts/educational-vs-risk";
import FamilyCommunication from "@/components/charts/family-communication";
import FamilyVsRisk from "@/components/charts/family-vs-risk";
import AnxietyWhenAway from "@/components/charts/anxiety-when-away";
import AnxietyVsRisk from "@/components/charts/anxiety-vs-risk";
import PhoneUseDuringMeals from "@/components/charts/phone-use-during-meals";
import MealsVsRisk from "@/components/charts/meals-vs-risk";
import LoseTrackOfTime from "@/components/charts/lose-track-of-time";
import LoseTrackVsRisk from "@/components/charts/lose-track-vs-risk";
import PhoneBeforeSleep from "@/components/charts/phone-before-sleep";
import BeforeSleepVsRisk from "@/components/charts/before-sleep-vs-risk";
import WakeUpCheck from "@/components/charts/wake-up-check";
import WakeUpVsRisk from "@/components/charts/wake-up-vs-risk";
import FeatureImportance from "@/components/charts/feature-importance";
import RiskScoreDistribution from "@/components/charts/risk-score-distribution";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain } from "lucide-react";
import { usePhoneAddictionDataStore } from "@/store/usePhoneAddictionDataStore";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { phoneAddictionData, loading } = usePhoneAddictionDataStore();

  // Overview Graphs State -------------------------------------------
  const [overallAddictionRate, setOverallAddictionRate] = useState([]);
  const [genderVsAddictionData, setGenderVsAddictionData] = useState([
    {
      gender: "",
      phone_addiction: 0,
    },
  ]);
  const [dailyPhoneUsageVsRiskData, setDailyPhoneUsageVsRiskData] = useState([
    {
      phone_use_hours: "",
      phone_addiction: 0,
    },
  ]);
  const [sleepDurationVsRiskData, setSleepDurationVsRiskData] = useState([
    {
      sleep_hours: "",
      phone_addiction: 0,
    },
  ]);

  // Usage Pattern Graphs Sate ----------------------------------------
  const [personInteractionVsRiskData, setPersonInteractionVsRiskData] =
    useState([
      {
        person_interaction: "",
        phone_addiction: 0,
      },
    ]);
  const [socialMediaUsageVsRiskData, setSocialMediaUsageVsRiskData] = useState([
    {
      social_media_hours: "",
      phone_addiction: 0,
    },
  ]);
  const [gamingUsageDailyVsRiskData, setGamingUsageDailyVsRiskData] = useState([
    {
      gaming_hours: "",
      phone_addiction: 0,
    },
  ]);
  const [educationalTimeDailyVsRiskData, setEducationalTimeDailyVsRiskData] =
    useState([
      {
        educational_hours: "",
        phone_addiction: 0,
      },
    ]);
  const [familyCommunicationVsRiskData, setFamilyCommunicationVsRiskData] =
    useState([
      {
        family_communication: "",
        phone_addiction: 0,
      },
    ]);

  // Behavior Graphs State ---------------------------------------------
  const [anxietyVsRiskData, setAnxietyVsRiskData] = useState([
    {
      phone_anxiety: "",
      phone_addiction: 0,
    },
  ]);
  const [phoneUseDuringMealsVsRiskData, setPhoneUseDuringMealsVsRiskData] =
    useState([
      {
        phone_during_meals: "",
        phone_addiction: 0,
      },
    ]);
  const [timePerceptionVsRiskData, setTimePerceptionVsRiskData] = useState([
    {
      lose_track_time: "",
      phone_addiction: 0,
    },
  ]);
  const [beforeSleepVsRiskData, setBeforeSleepVsRiskData] = useState([
    {
      phone_before_sleep: "",
      phone_addiction: 0,
    },
  ]);
  const [wakeUpVsRiskData, setWakeUpVsRiskData] = useState([
    {
      phone_after_wakeup: "",
      phone_addiction: 0,
    },
  ]);

  // Data Processing for All Graphs ------------------------------------
  useEffect(() => {
    if (!phoneAddictionData || phoneAddictionData.length === 0) return; // Exit if no data

    const {
      // Overview
      rates,
      genderVsAddiction,
      dailyPhoneUsageVsRisk,
      sleepVsRisk,

      // Usage Pattern
      socialInteractionVsRisk,
      socialMediaUsageVsRisk,
      gamingUsageDailyVsRisk,
      educationalTimeDailyVsRiskData,
      familyCommunicationVsRiskData,

      // Behavior
      anxietyVsRisk,
      phoneUseDuringMealsVsRisk,
      timePerceptionVsRisk,
      beforeSleepVsRisk,
      wakeUpVsRisk,
    } = phoneAddictionData.reduce(
      (acc, item) => {
        // OVERVIEW GRAPHS : DATA PROCESSING --------------------------------------------------------------
        // Overall Addiction Rate
        acc.rates.push(item.phone_addiction);
        acc.genderVsAddiction.push({
          gender: item.gender,
          phone_addiction: item.phone_addiction,
        });
        acc.dailyPhoneUsageVsRisk.push({
          phone_use_hours: item.phone_use_hours,
          phone_addiction: item.phone_addiction,
        });
        acc.sleepVsRisk.push({
          sleep_hours: item.sleep_hours,
          phone_addiction: item.phone_addiction,
        });

        // USAGE PATTERN GRAPHS : DATA PROCESSING --------------------------------------------------------
        acc.socialInteractionVsRisk.push({
          person_interaction: item.person_interaction,
          phone_addiction: item.phone_addiction,
        });
        acc.socialMediaUsageVsRisk.push({
          social_media_hours: item.social_media_hours,
          phone_addiction: item.phone_addiction,
        });
        acc.gamingUsageDailyVsRisk.push({
          gaming_hours: item.gaming_hours,
          phone_addiction: item.phone_addiction,
        });
        acc.educationalTimeDailyVsRiskData.push({
          educational_hours: item.educational_hours,
          phone_addiction: item.phone_addiction,
        });
        acc.familyCommunicationVsRiskData.push({
          family_communication: item.family_communication,
          phone_addiction: item.phone_addiction,
        });

        // BEHAVIOR GRAPHS : DATA PROCESSING -------------------------------------------------------------
        acc.anxietyVsRisk.push({
          phone_anxiety: item.phone_anxiety,
          phone_addiction: item.phone_addiction,
        });
        acc.phoneUseDuringMealsVsRisk.push({
          phone_during_meals: item.phone_during_meals,
          phone_addiction: item.phone_addiction,
        });
        acc.timePerceptionVsRisk.push({
          lose_track_time: item.lose_track_time,
          phone_addiction: item.phone_addiction,
        });
        acc.beforeSleepVsRisk.push({
          phone_before_sleep: item.phone_before_sleep,
          phone_addiction: item.phone_addiction,
        });
        acc.wakeUpVsRisk.push({
          phone_after_wakeup: item.phone_after_wakeup,
          phone_addiction: item.phone_addiction,
        });

        return acc;
      },
      {
        // Initialize all arrays
        rates: [],
        genderVsAddiction: [],
        dailyPhoneUsageVsRisk: [],
        sleepVsRisk: [],
        socialInteractionVsRisk: [],
        socialMediaUsageVsRisk: [],
        gamingUsageDailyVsRisk: [],
        educationalTimeDailyVsRiskData: [],
        familyCommunicationVsRiskData: [],
        anxietyVsRisk: [],
        phoneUseDuringMealsVsRisk: [],
        timePerceptionVsRisk: [],
        beforeSleepVsRisk: [],
        wakeUpVsRisk: [],
      }
    );

    // Update all states ----------------------------------------------
    setOverallAddictionRate(rates);
    setGenderVsAddictionData(genderVsAddiction);
    setDailyPhoneUsageVsRiskData(dailyPhoneUsageVsRisk);
    setSleepDurationVsRiskData(sleepVsRisk);
    setPersonInteractionVsRiskData(socialInteractionVsRisk);
    setSocialMediaUsageVsRiskData(socialMediaUsageVsRisk);
    setGamingUsageDailyVsRiskData(gamingUsageDailyVsRisk);
    setEducationalTimeDailyVsRiskData(educationalTimeDailyVsRiskData);
    setFamilyCommunicationVsRiskData(familyCommunicationVsRiskData);
    setAnxietyVsRiskData(anxietyVsRisk);
    setPhoneUseDuringMealsVsRiskData(phoneUseDuringMealsVsRisk);
    setTimePerceptionVsRiskData(timePerceptionVsRisk);
    setBeforeSleepVsRiskData(beforeSleepVsRisk);
    setWakeUpVsRiskData(wakeUpVsRisk);
  }, [phoneAddictionData]); // Run whenever phoneAddictionData changes

  // console.log(dailyPhoneUsageVsRiskData);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Navigation */}
        <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Brain className="h-6 w-6 text-emerald-500" />
              <h1 className="text-xl font-bold text-white">MindLink</h1>
            </Link>
            <Link
              to="/survey"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retake Survey
            </Link>
          </div>
        </nav>
        <main className="px-6 py-12">
          <div className="max-w-7xl mx-auto flex items-center justify-center h-[825px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Brain className="h-6 w-6 text-emerald-500" />
            <h1 className="text-xl font-bold text-white">MindLink</h1>
          </Link>
          <Link
            to="/survey"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retake Survey
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Phone Addiction Analytics
            </h1>
            <p className="text-slate-400">
              Comprehensive insights into digital habits and addiction risk
              patterns
            </p>
          </div>

          {/* Metrics Cards */}
          <MetricsCards />

          {/* Navigation */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSection("overview")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeSection === "overview"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection("usage")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeSection === "usage"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Usage Patterns
            </button>
            <button
              onClick={() => setActiveSection("behavioral")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeSection === "behavioral"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Behavioral
            </button>
            <button
              onClick={() => setActiveSection("insights")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeSection === "insights"
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Model Insights
            </button>
          </div>

          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <OverallAddictionRate
                overallAddictionRate={overallAddictionRate}
              />
              <GenderVsAddiction
                genderVsAddictionData={genderVsAddictionData}
              />
              <DailyUsageVsRisk
                dailyPhoneUsageVsRiskData={dailyPhoneUsageVsRiskData}
              />
              <SleepVsRisk sleepDurationVsRiskData={sleepDurationVsRiskData} />
            </div>
          )}

          {/* Usage Patterns Section */}
          {activeSection === "usage" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <InteractionFrequency />
                <InteractionVsRisk
                  personInteractionVsRiskData={personInteractionVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SocialMediaUsage />
                <SocialMediaVsRisk
                  socialMediaUsageVsRiskData={socialMediaUsageVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GamingUsage />
                <GamingVsRisk
                  gamingUsageDailyVsRiskData={gamingUsageDailyVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EducationalUsage />
                <EducationalVsRisk
                  educationalTimeDailyVsRiskData={
                    educationalTimeDailyVsRiskData
                  }
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FamilyCommunication />
                <FamilyVsRisk
                  familyCommunicationVsRiskData={familyCommunicationVsRiskData}
                />
              </div>
            </div>
          )}

          {/* Behavioral Section */}
          {activeSection === "behavioral" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AnxietyWhenAway />
                <AnxietyVsRisk anxietyVsRiskData={anxietyVsRiskData} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PhoneUseDuringMeals />
                <MealsVsRisk
                  phoneUseDuringMealsVsRiskData={phoneUseDuringMealsVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LoseTrackOfTime />
                <LoseTrackVsRisk
                  timePerceptionVsRiskData={timePerceptionVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PhoneBeforeSleep />
                <BeforeSleepVsRisk
                  beforeSleepVsRiskData={beforeSleepVsRiskData}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WakeUpCheck />
                <WakeUpVsRisk wakeUpVsRiskData={wakeUpVsRiskData} />
              </div>
            </div>
          )}

          {/* Model Insights Section */}
          {activeSection === "insights" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeatureImportance />
                <RiskScoreDistribution />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
