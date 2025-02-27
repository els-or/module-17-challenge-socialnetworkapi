import { Schema, Types, model, type Document } from 'mongoose';
import thoughtSchema from './Thought';

interface IUser extends Document {
    username: string,
    email: string,
    thoughts: Schema.Types.ObjectId[],
    friends: Schema.Types.ObjectId[],
    reactions: Array<IReaction>,
    frendCount: number,
}

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date | undefined,
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        thoughts: [thoughtSchema],
        friends: [this]
    },
    {
        timestamps: true,
        toJSON: { getters: true },
        toObject: { getters: true },
        virtuals: {
            friendCount: {
                get() {
                    return this.friends.length;
                }
            }
        }
    }
);

const User = model<IUser>('User', userSchema);

export default User;