import { usePhoneAddictionDataStore } from "./store/usePhoneAddictionDataStore.js";
import { useEffect } from "react";
import AppHeader from "./components/app-header.jsx";

export default function Layout() {
  const { fetchAllData } = usePhoneAddictionDataStore();

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <main>
      <AppHeader />
    </main>
  );
}
