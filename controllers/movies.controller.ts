import Movie from "../models/movies.model";
import bcrypt from "bcrypt"
import express, {Request, Response} from "express"

const create = (req:Request, res: Response) => {
  const {name, type, price } = req.body
  res.json({status: true, result : req.body})
}

const getAll = async (req : Request, res: Response) => {
  const { pageSize, filter} = req.body
  const filterText = { $or : filter && filter.searchText && [
    {title : {$regex : filter.searchText}},
    {flot : {$regex : filter.searchText}},
    {fullplot : {$regex : filter.searchText}}] }
  try {
    const rowcount = await Movie.find(filterText).count()
    const skips = 30 * (pageSize-1)
    const result = await Movie.find(filterText)
    .select({title:1, plot:1, fullplot:1, poster:1})
    .sort({title:1})
    .skip(skips).limit(30)
    res.json({ status: true, totalRows : rowcount, result });
  } catch (err) {
    res.json({ status: false, message: err });
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

export {getAll, getOne, create}



