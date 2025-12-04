import mongoose from "mongoose";

const phoneAddictionSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    phone_use_hours: {
      type: String,
      required: true,
    },
    sleep_hours: {
      type: String,
      required: true,
    },
    person_interaction: {
      type: String,
      required: true,
    },
    social_media_hours: {
      type: String,
      required: true,
    },
    gaming_hours: {
      type: String,
      required: true,
    },
    educational_hours: {
      type: String,
      required: true,
    },
    family_communication: {
      type: String,
      required: true,
    },
    phone_anxiety: {
      type: String,
      required: true,
    },
    phone_during_meals: {
      type: String,
      required: true,
    },
    lose_track_time: {
      type: String,
      required: true,
    },
    performance_impact: {
      type: String,
      required: true,
    },
    phone_before_sleep: {
      type: String,
      required: true,
    },
    phone_after_wakeup: {
      type: String,
      required: true,
    },
    phone_addiction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      currentTime: () => new Date(Date.now() + 8 * 60 * 60 * 1000), // ✅ PH timezone
    },
  }
);

const PhoneAddiction = mongoose.model("PhoneAddiction", phoneAddictionSchema);

export default PhoneAddiction;
