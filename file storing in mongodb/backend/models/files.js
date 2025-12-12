import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contenttype: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
});

export default mongoose.models.File || mongoose.model("File", fileSchema);
