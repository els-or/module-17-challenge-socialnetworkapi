import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomUser, getRandomReaction, getRandomThought } from './data.js'

try {
    await db();
    await cleanDB();

    for (let i = 0; i < 10; i++) {
        const user = await User.create(getRandomUser());
        const thought = await Thought.create({
            thoughtText: getRandomThought(),
            username: user.username,
            reactions: [],
        });

        for (let j = 0; j < 5; j++) {
            await Thought.findByIdAndUpdate(
                thought._id,
                { $push: { reactions: { reactionBody: getRandomReaction() } } },
                { new: true, runValidators: true }
            );
        }
    }
    console.info('Database seeded');
    process.exit(0);
} catch (err) {
    console.error('Error seeding database.', err);
    process.exit(1);
}