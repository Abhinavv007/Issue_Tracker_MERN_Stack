import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewIssueCard({ name, _id, title, description, author }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const result = await axios.delete(`http://localhost:9000/api/deleteissue/${_id}`);
      if (result) {
        alert(result.data.msg);
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting issue:', error);
      alert('Failed to delete issue. Please try again.');
    }
  };

  const handleEdit = () => {
    navigate("/edit-issue", { state: { name, _id, title, description, author } });
  };

  return (
    <>
        

    
    <div className="card mb-3 border rounded shadow" style={{ backgroundColor: '#f8f9fa', color: '#343a40' }}>
      
      <div className="card-body">
        <h5 className="card-title text-primary border-bottom pb-2 mb-3">Project: {name}</h5>
        <p className="card-text mb-3"><strong>Title:</strong> {title}</p>
        <p className="card-text mb-3"><strong>Description:</strong> {description}</p>
        <p className="card-text text-muted"><strong>Author:</strong> {author}</p>

        <div className="d-flex justify-content-end mt-3">
          <button onClick={handleEdit} className="btn btn-primary me-2 mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger mr-2">
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ViewIssueCard;
