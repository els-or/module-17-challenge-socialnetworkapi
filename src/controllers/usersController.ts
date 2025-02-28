import { Request, Response } from 'express';
import { User } from '../models/index.js';

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req
            .params.userId, req.body, { new: true, runValidators: true });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};