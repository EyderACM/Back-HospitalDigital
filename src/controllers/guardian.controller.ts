import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Guardian } from "../entities/Guardian";
import { validate } from "class-validator";

export const getGuardians = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const guardians = await getRepository(Guardian).find();
    return res.status(200).json(guardians);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const getGuardian = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const guardianId = req.params.id;
    const result = await getRepository(Guardian).findOne(guardianId);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ msg: "Guardian not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const createGuardian = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newGuardian = getRepository(Guardian).create(req.body);

    const errors = await validate(newGuardian);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    const result = await getRepository(Guardian).save(newGuardian);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const updateGuardian = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const guardianId = req.params.id;
    const newGuardian = getRepository(Guardian).create(req.body);
    const guardian = await getRepository(Guardian).findOne(guardianId);

    const errors = await validate(newGuardian);

    if (errors.length > 0)
      return res.status(400).json({ msg: "Please enter valid data", errors });

    if (guardian) {
      getRepository(Guardian).merge(guardian, req.body);
      const result = await getRepository(Guardian).save(guardian);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Guardian not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};

export const deleteGuardian = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const guardianId = req.params.id;

    const guardian = await getRepository(Guardian).findOne(guardianId);
    if (guardian) {
      const result = await getRepository(Guardian).delete(guardianId);
      return res.status(200).json(result);
    }
    return res.status(404).json({ msg: "Guardian not found" });
  } catch (error) {
    return res.status(500).json({ msg: "Unexpected DB error", error });
  }
};
