import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";

export const getPatients = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const patients = await getRepository(Patient).find();
  return res.json(patients);
};
