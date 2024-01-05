import React from 'react';
import { Link } from 'react-router-dom';

const Navig = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Issue Tracker</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/create-project">Create Project</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/view-issue">View Issue</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navig;
