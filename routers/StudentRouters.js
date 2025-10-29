import * as StudentController from '../controllers/StudentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudent);
//studentRoutes.post('new', StudentController.createStudent)

export default studentRoutes;