import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  purchase_datetime: {
    type: Date,
    default: Date.now, // Guardará la fecha y hora actual por defecto
  },
  amount: {
    type: Number,
    required: true,
  },
  purchaser: {
    type: String,
    required: true,
  },
});

export const Ticket = model('Ticket', ticketSchema);


