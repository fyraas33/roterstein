import mongoose, { Schema } from "mongoose";

const reserveSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
   
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    
  },
  phone: {
    type: String,
    required: [true, "phone is required."],
  },
  day: {
    type: String,
    required: [true, "day is required."],
  },
  time: {
    type: String,
    required: [true, "time is required."],
  },
  person: {
    type: String,
    required: [true, "nmbr of person is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Reserve =
  mongoose.models.Reserve || mongoose.model("Reserve", reserveSchema);

export default Reserve;
