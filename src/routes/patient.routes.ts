import { Router } from "express";
const router = Router();

import { getPatients } from "../controllers/patient.controller";

router.get("/patients", getPatients);
// router.get("/patients/:id");
// router.post("/patients");
// router.put("/patients");
// router.delete("/patients/:id");

export default router;
