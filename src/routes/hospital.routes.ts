import { Router } from "express";
const router = Router();

import {
  getHospital,
  createHospital,
  getHospitals,
  updateHospital,
  deleteHospital,
} from "../controllers/hospital.controller";

router.get("/hospitals", getHospitals);
router.post("/hospitals", createHospital);
router.get("/hospitals/:id", getHospital);
router.put("/hospitals/:id", updateHospital);
router.delete("/hospitals/:id", deleteHospital);
