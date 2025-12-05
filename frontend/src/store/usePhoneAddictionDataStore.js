import { create } from "zustand";
import axios from "../lib/axios.js";

export const usePhoneAddictionDataStore = create((set) => ({
  phoneAddictionData: [],
  loading: false,

  setPhoneAddictionData: (phoneAddictionData) => set({ phoneAddictionData }),

  createPhoneAddictionData: async ({
    gender,
    phone_use_hours,
    sleep_hours,
    person_interaction,
    social_media_hours,
    gaming_hours,
    educational_hours,
    family_communication,
    phone_anxiety,
    phone_during_meals,
    lose_track_time,
    performance_impact,
    phone_before_sleep,
    phone_after_wakeup,
  }) => {
    set({ loading: true });
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
          phone_use_hours,
          sleep_hours,
          person_interaction,
          social_media_hours,
          gaming_hours,
          educational_hours,
          family_communication,
          phone_anxiety,
          phone_during_meals,
          lose_track_time,
          performance_impact,
          phone_before_sleep,
          phone_after_wakeup,
        }),
      });

      // ✅ Only call json() ONCE
      const result = await res.json();

      console.log("Prediction Response:", result); // { prediction: "yes" }

      // ✅ Save prediction into DB
      const response = await axios.post("/phone-addiction/create", {
        gender,
        phone_use_hours,
        sleep_hours,
        person_interaction,
        social_media_hours,
        gaming_hours,
        educational_hours,
        family_communication,
        phone_anxiety,
        phone_during_meals,
        lose_track_time,
        performance_impact,
        phone_before_sleep,
        phone_after_wakeup,
        phone_addiction: result.prediction, // ✅ use prediction string
      });

      console.log("data created:", response.data.message);

      set((prevState) => ({
        phoneAddictionData: [
          ...prevState.phoneAddictionData,
          response.data.data,
        ],
        loading: false,
      }));
    } catch (error) {
      console.error("Error creating data:", error);
      set({ loading: false });
    }
  },

  fetchAllData: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("/phone-addiction/get");
      // console.log("data fetched: ", res.data.count);
      set({ phoneAddictionData: res.data.data, loading: false });
      console.log("data fetched successfully");
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ loading: false });
    }
  },
}));
