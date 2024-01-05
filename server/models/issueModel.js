import mongoose from "mongoose";

const issueSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    author: String,
});

const issueModel = new mongoose.model("issues", issueSchema);

export default issueModel;
