import User from "../models/user.model";
import express, { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await User.find().limit(5);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOneUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await User.find({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

export { getAllUsers, getOneUser };
