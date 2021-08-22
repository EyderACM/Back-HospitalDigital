import express from "express";
import morgan from "morgan";
import cors from "cors";

import patientRoutes from "./routes/patient.routes";

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(patientRoutes);

app.listen(3000);
console.log("Server on port", 3000);
