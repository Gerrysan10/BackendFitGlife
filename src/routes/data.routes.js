import { Router } from "express";
import { getProgressBody, getProgressRoutines,addBodyMeasurement,addExerciseRoutine } from "../controllers/data.controller.js";

const router = Router();
router.get('/:userId/progress-body', getProgressBody);
router.get('/:userId/progress-routines', getProgressRoutines);
router.post('/:userId/progress-body', addBodyMeasurement);
router.post('/:userId/progress-routines', addExerciseRoutine);
export default router;
