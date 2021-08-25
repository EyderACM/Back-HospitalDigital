import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { validate } from "class-validator";

export const getPatients = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const patients = await getRepository(Patient).find({
      relations: ["guardian", "hospital"],
    });
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const getPatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const patientId = req.params.id;
    const result = await getRepository(Patient).findOne(patientId, {
      relations: ["guardian", "hospital"],
    });
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ msg: "Patient not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const createPatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newPatient = getRepository(Patient).create(req.body);

    const errors = await validate(newPatient);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    const result = await getRepository(Patient).save(newPatient);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const updatePatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const patientId = req.params.id;
    const newPatient = getRepository(Patient).create(req.body);
    const patient = await getRepository(Patient).findOne(patientId);

    const errors = await validate(newPatient);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    if (patient) {
      getRepository(Patient).merge(patient, req.body);
      const result = await getRepository(Patient).save(patient);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Patient not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const deletePatient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const patientId = req.params.id;

    const patient = await getRepository(Patient).findOne(patientId);
    if (patient) {
      const result = await getRepository(Patient).delete(patientId);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Patient not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};
