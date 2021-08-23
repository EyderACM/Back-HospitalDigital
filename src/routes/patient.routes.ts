import { Router } from "express";
const router = Router();

import {
  getPatients,
  createPatient,
  getPatient,
} from "../controllers/patient.controller";

router.get("/patients", getPatients);
router.post("/patients", createPatient);
router.get("/patients/:id", getPatient);
// router.put("/patients");
// router.delete("/patients/:id");

export default router;
