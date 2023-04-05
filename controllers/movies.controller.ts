import Movie from "../models/movies.model";
import bcrypt from "bcrypt"
import express, {Request, Response} from "express"

const getAll = async (req : Request, res: Response) => {
  try {
    const result = await Movie.find().limit(5);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req : Request, res: Response) => {
  const {_id} = req.params
    try {
        const result = await Movie.find({_id})
        res.json({status: true, result})
    } catch (err) {
        res.json({status: false, err})
    }
}

export {getAll, getOne}



