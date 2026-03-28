import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  message: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IMessage>('Message', messageSchema);
