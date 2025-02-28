import { Request, Response } from 'express';
import { Thought } from '../models/index.js';

export const addReaction = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        res.json(updatedThought);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

export const removeReaction =
    async (req: Request, res: Response) => {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true, runValidators: true }
            );
            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(400).json(err);
        }
    }

    