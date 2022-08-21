import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlenght: 3,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator:isEmail ,
      message: 'Please, provide a valid email'
    },
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlenght: 6,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'lastName'
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city'
  },
});

export default mongoose.model("User", UserSchema)