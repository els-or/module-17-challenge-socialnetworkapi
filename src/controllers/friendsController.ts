import { Request, Response } from 'express';
import { User, Thought } from '../models';

export const addfriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;
    const user = await User.findById(userId);
    user?.friends.push(friendId);
    await user?.save();
    res.status(200).json({ message: 'Friend added successfully' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const removefriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;
    const user = await User.findById(userId);
    user?.friends.splice(user?.friends.indexOf(friendId), 1);
    await user?.save();
    res.status(200).json({ message: 'Friend removed successfully' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
