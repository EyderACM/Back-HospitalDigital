import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { validate } from "class-validator";

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

  const errors = await validate(newPatient);

  if (errors.length > 0)
    return res.status(400).json({ msg: "Please enter valid data", errors });

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

export const deletePatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const patientId = req.params.id;
  const result = await getRepository(Patient).delete(patientId);
  return res.json(result);
};
