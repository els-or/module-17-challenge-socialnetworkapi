import { User, Thought } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
    try {
        await User.deleteMany({});
        console.log('Users deleted');
        await Thought.deleteMany({});
        console.log('Thoughts deleted');
    } catch (err) {
        console.error('Error cleaning collections.', err);
        process.exit(1);
    }
};

export default cleanDB;