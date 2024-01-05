import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditIssue() {
  const location = useLocation();
  const { name, _id, title, description, author } = location.state;
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name,
    title,
    description,
    author,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`http://localhost:9000/api/editissue/${_id}`, input);
      if (result.data.msg === 'Issue Updated Successfully.') {
        alert(result.data.msg);
        navigate('/view-issue');
      }
    } catch (error) {
      console.error('Error updating issue:', error);
      alert('Failed to update issue. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <h3 style={{ color: '#007bff' }} className="text-center mb-4">Edit Your Issue</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name of Project
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
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
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

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditIssue;
