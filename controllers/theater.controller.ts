import Theater from "../models/theathers.model";
import express, { Request, Response } from "express";

const getAllTheaters = async (req: Request, res: Response) => {
  try {
    const result = await Theater.find().limit(5);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOneTheater = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Theater.find({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

export { getAllTheaters, getOneTheater };
