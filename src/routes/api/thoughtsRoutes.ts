import { Router } from 'express';
import {
    getAllThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
} from '../../controllers/thoughtsController.js';
import { addReaction, removeReaction } from '../../controllers/reactionsController.js';

const router = Router();

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction)

export { router as thoughtsRouter };