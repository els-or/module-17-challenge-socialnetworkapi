import { Schema, model, Types, type Document } from 'mongoose';

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date | undefined,
    username: string,
    reactions: Array<IReaction>[],
}

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date | undefined,
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp: Date) => (
            new Date(timestamp).toLocaleString('en-US',{
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }))
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [new Schema<IReaction>({
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId(),
            },
            reactionBody: {
                type: String,
                required: true,
                maxLength: 280,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp: Date) => (
                    new Date(timestamp).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    second: '2-digit',
                    }))
                }
        })],
    },       
    {
        timestamps: true,
        toJSON: { getters: true },
        toObject: { getters: true },
    }
);

thoughtSchema.virtual('reactionCount').get(function(this: IThought) {
    return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);
export default Thought;