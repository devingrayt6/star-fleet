import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Log = new Schema(
  {
    author: { type: String, required: true },
    body: { type: String, required: true },
    logId: { type: ObjectId, ref: 'Log', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;