"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getOne = exports.getAll = void 0;
const movies_model_1 = __importDefault(require("../models/movies.model"));
const create = (req, res) => {
    const { name, type, price } = req.body;
    res.json({ status: true, result: req.body });
};
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, filter } = req.body;
    const filterText = { $or: filter && filter.searchText && [
            { title: { $regex: filter.searchText } },
            { flot: { $regex: filter.searchText } },
            { fullplot: { $regex: filter.searchText } }
        ] };
    try {
        const rowcount = yield movies_model_1.default.find(filterText).count();
        const skips = 30 * (pageSize - 1);
        const result = yield movies_model_1.default.find(filterText)
            .select({ title: 1, plot: 1, fullplot: 1, poster: 1 })
            .sort({ title: 1 })
            .skip(skips).limit(30);
        res.json({ status: true, totalRows: rowcount, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield movies_model_1.default.findOne({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, err });
    }
});
exports.getOne = getOne;
