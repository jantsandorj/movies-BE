import Movie from "../models/movies.model";
import bcrypt from "bcrypt"
import express, {Request, Response} from "express"

const create = (req:Request, res: Response) => {
  const {name, type, price } = req.body
  res.json({status: true, result : req.body})
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  const { pageSize, limit } = req.body;
  console.log(req.body);

  try {
    const rowCount = await Movie.find().count();

    const skips = 28 * (pageSize - 1);

    const result = await Movie.find()
      .select({ title: 1, plot: 1, poster: 1, tomatoes: 1 })
      .sort({ _id: 1 })
      .skip(skips)
      .limit(limit ? limit : 28);

    if (result) {
      res.json({ status: true, result, totalRows: rowCount });
    } else {
      res.json({ status: false, message: "Rows not found" });
    }
  } catch (err) {
    console.log(err);

    res.json({ status: true, message: "Test" });
  }
};

const searchTextBy = async (req: Request, res: Response) => {
  const { searchText } = req.body;
  try {
    const result = await Movie.find({$filter: {$regex : {searchText}}});

    if (result) {
      res.json({ status: true, result });
    } else {
      res.json({ status: false, message: "Not found" });
    }
  } catch (err) {
    res.json({ status: true, message: "Test" });
  }
};

const getOne = async (req : Request, res: Response) => {
  const {_id} = req.params
    try {
        const result = await Movie.findOne({_id})
        res.json({status: true, result})
    } catch (err) {
        res.json({status: false, err})
    }
}

export {getAll, getOne, create, searchTextBy}



