import mongoose from "mongoose";

//* Schema definition
const creationSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

//* Create the model
const Creations =
  mongoose.model.Creations || mongoose.model("Creations", creationSchema);

//* Export the model
export default Creations;
