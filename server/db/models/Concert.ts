import mongoose, { Document, Schema } from 'mongoose';

export interface IConcert extends Document {
  imageUrl: string;
  title: string;
  date: string;
  venue: string;
  price: string;
}

const concertSchema = new Schema<IConcert>({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  venue: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.model<IConcert>('Concert', concertSchema);
