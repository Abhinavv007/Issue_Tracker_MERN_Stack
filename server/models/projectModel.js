import mongoose from "mongoose";
const projectSchema = mongoose.Schema({
    name:String,
    description:String,
    author:String,
})
const projectModel = new mongoose.model("projects",projectSchema)
export default projectModel