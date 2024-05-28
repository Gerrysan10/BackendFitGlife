import User from '../models/user.model.js';

export const getProgressBody = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId, 'measurements');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.measurements);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving progress body measurements', error });
    }
};

export const getProgressRoutines = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId, 'exerciseRoutines');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.exerciseRoutines);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving exercise routines', error });
    }
};

// Endpoint para agregar medidas corporales
export const addBodyMeasurement = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { date, weight, chest, waist, hips, thigh } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.measurements.push({
            date,
            weight,
            chest,
            waist,
            hips,
            thigh
        });

        await user.save();
        res.status(201).json(user.measurements);
    } catch (error) {
        res.status(500).json({ message: 'Error adding body measurement', error });
    }
};

// Endpoint para agregar ejercicios de rutina
export const addExerciseRoutine = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { date, exercise, sets, reps, weight } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.exerciseRoutines.push({
            date,
            exercise,
            sets,
            reps,
            weight
        });

        await user.save();
        res.status(201).json(user.exerciseRoutines);
    } catch (error) {
        res.status(500).json({ message: 'Error adding exercise routine', error });
    }
};
