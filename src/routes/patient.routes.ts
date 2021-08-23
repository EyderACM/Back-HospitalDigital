import { Router } from "express";
const router = Router();

import {
  getPatients,
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controller";

router.get("/patients", getPatients);
router.post("/patients", createPatient);
router.get("/patients/:id", getPatient);
router.put("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

export default router;
