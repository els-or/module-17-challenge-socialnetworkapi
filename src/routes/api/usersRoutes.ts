import { Router } from 'express';
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from '../../controllers/usersController';
import { addfriend, removeFriend } from '../../controllers/friendsController';

const router = Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addfriend).delete(removeFriend);

export default router;

