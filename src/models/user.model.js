import mongoose from "mongoose";

const ExerciseRoutineSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    exercise: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const BodyMeasurementSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    chest: {
        type: Number,
        required: true
    },
    waist: {
        type: Number,
        required: true
    },
    hips: {
        type: Number,
        required: true
    },
    thigh: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    measurements: [BodyMeasurementSchema],
    exerciseRoutines: [ExerciseRoutineSchema] 
}, {
    timestamps: true
});

export default mongoose.model('User', UserSchema);
