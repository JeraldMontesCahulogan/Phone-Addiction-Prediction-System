/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page.jsx";
import DashboardPage from "./pages/dashboard-page.jsx";
import SurveyPage from "./pages/survey-page.jsx";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { usePhoneAddictionDataStore } from "./store/usePhoneAddictionDataStore.js";

function App() {
  const { fetchAllData } = usePhoneAddictionDataStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllData(); // wait for API call
      setData(usePhoneAddictionDataStore.getState().phoneAddictionData); // now set state
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/survey" element={<SurveyPage />} />
      </Routes>

      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
