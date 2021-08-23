import "reflect-metadata";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import patientRoutes from "./routes/patient.routes";

require("dotenv").config();

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(patientRoutes);

app.listen(3000);
console.log("Server on port", 3000);
