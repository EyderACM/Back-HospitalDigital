import { Router } from "express";
const router = Router();

import {
  getGuardians,
  createGuardian,
  getGuardian,
  updateGuardian,
  deleteGuardian,
} from "../controllers/guardian.controller";

router.get("/guardians", getGuardians);
router.post("/guardians", createGuardian);
router.get("/guardians/:id", getGuardian);
router.put("/guardians/:id", updateGuardian);
router.delete("/guardians/:id", deleteGuardian);

export default router;
