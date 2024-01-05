import React, { useState } from 'react';
import axios from "axios"

import { useNavigate } from 'react-router-dom';
function CreateIssue() {
  
  const navigate = useNavigate()
    const [input, setInput] = useState({
        name:'',
        title: '',
        description: '',
        author: '',
      });
    const handleSubmit = async(e) => {
      console.log(input)
        e.preventDefault();
        const result = await axios.post("http://localhost:9000/api/addissue",input)
        if(result.data.msg==="Issue Added Successfully."){
            alert(result.data.msg)
            navigate("/view-issue")
        }
      };
  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <h3 className='text-center mb-3'>Issue in Project?</h3>
        <label htmlFor="name" className="form-label">Name of project</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={input.name}
          onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
          required
        />
      </div>

      <div className="mb-3">
        
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={input.title}
          onChange={(e)=>setInput({...input,title:e.target.value})}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={input.description}
          onChange={(e)=>setInput({...input,description:e.target.value})}
          rows="3"
          required
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={input.author}
          onChange={(e)=>setInput({...input,author:e.target.value})}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

  )
}

export default CreateIssue