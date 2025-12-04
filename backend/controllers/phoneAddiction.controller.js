import mongoose from "mongoose";
import PhoneAddiction from "../model/phoneAddiction.model.js";

export const getPhoneAddictionData = async (req, res) => {
  const phoneAddictionData = await PhoneAddiction.find({});
  try {
    phoneAddictionData.length === 0
      ? res.status(200).json({
          success: true,
          message: "No Data Found",
          data: [],
        })
      : res.status(200).json({
          success: true,
          message: "Data fetched successfully",
          count: phoneAddictionData.length,
          data: phoneAddictionData,
        });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createPhoneAddictionData = async (req, res) => {
  const phoneAddictionAddedData = req.body;
  // console.log(phoneAddictionAddedData);
  if (!phoneAddictionAddedData) {
    return res
      .status(400)
      .json({ success: false, message: "No Data Provided" });
  } else if (
    !phoneAddictionAddedData.gender ||
    !phoneAddictionAddedData.phone_use_hours ||
    !phoneAddictionAddedData.sleep_hours ||
    !phoneAddictionAddedData.person_interaction ||
    !phoneAddictionAddedData.social_media_hours ||
    !phoneAddictionAddedData.gaming_hours ||
    !phoneAddictionAddedData.educational_hours ||
    !phoneAddictionAddedData.family_communication ||
    !phoneAddictionAddedData.phone_anxiety ||
    !phoneAddictionAddedData.phone_during_meals ||
    !phoneAddictionAddedData.lose_track_time ||
    !phoneAddictionAddedData.performance_impact ||
    !phoneAddictionAddedData.phone_before_sleep ||
    !phoneAddictionAddedData.phone_after_wakeup ||
    !phoneAddictionAddedData.phone_addiction
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  const newPhoneAddictionData = new PhoneAddiction(phoneAddictionAddedData);
  try {
    await newPhoneAddictionData.save();
    res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: newPhoneAddictionData,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
