import express from "express";
import {
  createPhoneAddictionData,
  getPhoneAddictionData,
} from "../controllers/phoneAddiction.controller.js";

const router = express.Router();

router.get("/get", getPhoneAddictionData);
router.post("/create", createPhoneAddictionData);

export default router;
