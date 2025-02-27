import { Request, Response } from 'express';
import { User, Thought } from '../models';

export const getAllThoughts = async (req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const createThought = async (req: Request, res: Response) => {
    try {
        const newThought = await Thought.create(req.body);
        const user = await User.findByIdAndUpdate(
            req.body.userId,
            { $push: { thoughts: newThought._id } },
            { new: true }
        );
        res.json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const updateThought = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate
            (req.params.id, req.body
                , { new: true, runValidators: true });
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        res.json(deletedThought);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const addReaction = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const deleteReaction = async (req: Request, res: Response) => {
    try {
        const { thoughtId, reactionId } = req.params;
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { reactionId: reactionId } } },
            { new: true }
        );

        if (!updatedThought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }

        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
};





