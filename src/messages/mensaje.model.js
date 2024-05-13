import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

MessageSchema.methods.toJSON = function () {
  const message = this.toObject();
  return message;
};

export default mongoose.model("Message", MessageSchema);
