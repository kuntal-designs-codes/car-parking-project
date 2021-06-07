// Using ES6 imports
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const SlotSchema = new Schema({
  slot_no: {
    type: Number,
    required: true
  },
  lot_id: {
    type: Number,
    required: true
  },
  entry: {
    type: Date
  },
  licence_no: {
    type: String
  },
  is_empty: {
    type: Boolean
  }
});

const Slot = mongoose.model("slot", SlotSchema);

export default Slot;

