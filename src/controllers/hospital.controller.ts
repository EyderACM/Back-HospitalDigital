import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Hospital } from "../entities/Hospital";
import { validate } from "class-validator";

export const getHospitals = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const hospitals = await getRepository(Hospital).find();
    return res.status(200).json(hospitals);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const getHospital = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const hospitalId = req.params.id;
    const result = await getRepository(Hospital).findOne(hospitalId);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ msg: "Hospital not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const createHospital = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newHospital = getRepository(Hospital).create(req.body);

    const errors = await validate(newHospital);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    const result = await getRepository(Hospital).save(newHospital);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const updateHospital = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const hospitalId = req.params.id;
    const newHospital = getRepository(Hospital).create(req.body);
    const hospital = await getRepository(Hospital).findOne(hospitalId);

    const errors = await validate(newHospital);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    if (hospital) {
      getRepository(Hospital).merge(hospital, req.body);
      const result = await getRepository(Hospital).save(hospital);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Patient not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const deleteHospital = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const hospitalId = req.params.id;

    const hospital = await getRepository(Hospital).findOne(hospitalId);
    if (hospital) {
      const result = await getRepository(Hospital).delete(hospitalId);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Patient not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};
