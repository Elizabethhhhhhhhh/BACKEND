import * as StudentController from '../controllers/StudentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudent);
studentRoutes.post('/new', StudentController.createStudent);
studentRoutes.put('/edit/:studentId', StudentController.editStudent);
studentRoutes.delete('/edit/:studentId', StudentController.deleteStudent);

export default studentRoutes;