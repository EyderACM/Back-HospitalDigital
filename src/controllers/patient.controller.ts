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

export const createPatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPatient = getRepository(Patient).create(req.body);
  const result = await getRepository(Patient).save(newPatient);
  return res.json(result);
};
