import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, phone, email, password } = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            phone,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});
        res.cookie('token',token);
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            phone: userSaved.phone,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            UpdateAt: userSaved.updatedAt,
        }
        );
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
