import express from "express"
const router = express.Router()
import projectModel from "../models/projectModel.js"
import issueModel from "../models/issueModel.js"

router.post("/createprojects",async(req,resp)=>{
    try {
        const {name,description,author} = req.body
        if(name&&description&&author){
      const project = new projectModel({name,description,author})
      const result = await project.save()
      resp.json({msg:"Project Added Successfully."})
        } else{
            resp.json({msg:"All fields are required"})
        }
    } catch (error) {
        console.error(error)
    }
})
router.get("/getprojects",async(req,resp)=>{
    try {
        const projects = await projectModel.find({})
        if(projects){
     resp.json({msg:projects})
        } else{
       resp.json({msg:"Create a new project"})
        }
    } catch (error) {
        console.error(error)
    }
})
router.delete("/deleteproject/:id",async(req,resp)=>{
try {
    const {id} = req.params
    const project = await projectModel.findByIdAndDelete(id)
    resp.json({ msg: "Project deleted successfully" });
} catch (error) {
    console.error(error)
}
})
router.post("/addissue",async(req,resp)=>{
    try {
        const {name,title,description,author} = req.body
        if(name&&title&&description&&author){
       const issue = new issueModel({name,title,description,author})
       const result = await issue.save()
       resp.json({msg:"Issue Added Successfully."})
        } else{
       resp.json({msg:"Please fill all the fields"})
        }
        
    } catch (error) {
        
    }
})
router.put("/editissue/:id",async(req,resp)=>{
    try {
        const {id} = req.params
        const {name,title,description,author} = req.body
        const issue = await issueModel.findByIdAndUpdate(id,{name,title,description,author},{new:true})
        const result = await issue.save()
        resp.json({msg:"Issue Updated Successfully."})
        
    } catch (error) {
        console.error(error)
    }
})
router.delete("/deleteissue/:id",async(req,resp)=>{
    try {  
        const {id} = req.params
        const issue = await issueModel.findByIdAndDelete(id)
        resp.json({ msg: "Issue deleted successfully" });
    } catch (error) {
        console.error(error)

    }
})
router.get("/getissues",async(req,resp)=>{
    try {
        const issue = await issueModel.find({})
        if(issue){
     resp.json({msg:issue})
        } else{
       resp.json({msg:"Create a new issue"})
        }
    } catch (error) {
        console.error(error)
    }
})
export default router