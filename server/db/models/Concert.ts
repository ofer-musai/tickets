import mongoose, { Document, Schema } from 'mongoose';

export interface IConcert extends Document {
  imageUrl: string;
  title: string;
  date: string;
  venue: string;
  price: number;
  doorsOpen: string;
  description: string;
  genre: string;
  capacity: number;
  ageLimit: string;
  photography: string;
  highlights: Array<{ icon: string; label: string; value: string }>;
  creatorId?: mongoose.Types.ObjectId;
  ticketCount: number;
  ticketsAvailable: number;
}

const concertSchema = new Schema<IConcert>({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  venue: { type: String, required: true },
  price: { type: Number, required: true },
  doorsOpen: { type: String },
  description: { type: String },
  genre: { type: String },
  capacity: { type: Number },
  ageLimit: { type: String },
  photography: { type: String },
  highlights: [{ icon: String, label: String, value: String }],
  creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  ticketCount: { type: Number, required: true, default: 0 },
  ticketsAvailable: { type: Number, required: true, default: 0 },
});

export default mongoose.model<IConcert>('Concert', concertSchema);
