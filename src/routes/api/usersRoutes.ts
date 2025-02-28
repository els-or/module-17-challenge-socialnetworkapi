import { Router } from 'express';
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from '../../controllers/usersController.js';

import { addFriend, removeFriend } from '../../controllers/friendsController.js';

const router = Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export { router as usersRouter };

