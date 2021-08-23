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

export const getPatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const patientId = req.params.id;
  const result = await getRepository(Patient).findOne(patientId);
  return res.json(result);
};

export const createPatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPatient = getRepository(Patient).create(req.body);
  const result = await getRepository(Patient).save(newPatient);
  return res.json(result);
};

export const updatePatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const patientId = req.params.id;
  const patient = await getRepository(Patient).findOne(patientId);
  if (patient) {
    getRepository(Patient).merge(patient, req.body);
    const result = await getRepository(Patient).save(patient);
    return res.json(result);
  }

  return res.status(404).json({ msg: "User not found" });
};
