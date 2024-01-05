import axios from 'axios';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ _id,name, description, author }) => {
    const navigate = useNavigate()
    const handleIssue =()=>{
   navigate("/create-issue")
    }
  const handleDelete = async() => {
    const result = await axios.delete(`http://localhost:9000/api/deleteproject/${_id}`)
    if(result){
        alert(result.data.msg)
        window.location.reload()
    }
  };

  return (
    <div className="card shadow mt-5 px-3 py-3">
      <div className="card-body">
        <h5 className="card-title text-center text-primary">Project: {name}</h5>
        <p className="card-text px-3 text-center" style={{ color: '#333' }}>{description}</p>
        <p className="card-text text-muted text-center"> <b>Author:</b> <i>{author}</i> </p>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={handleIssue} className="btn btn-success mx-2">Raise Issue</button>
          <button onClick={handleDelete} className="btn btn-danger mx-2">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
