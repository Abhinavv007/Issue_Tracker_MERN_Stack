import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProject() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    description: '',
    author: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:9000/api/createprojects', input);
      if (result.data.msg === 'Project Added Successfully.') {
        alert(result.data.msg);
        navigate('/');
      } else {
        alert('Failed to add project');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to add project. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-lg">
        <h1 className="text-center mb-4">Create a New Project</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Project Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={input.description}
            onChange={(e) => setInput({ ...input, description: e.target.value })}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={input.author}
            onChange={(e) => setInput({ ...input, author: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
