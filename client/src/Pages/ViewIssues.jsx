import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewIssueCard from './ViewIssueCard';

function ViewIssues() {
  
const [data, setData] = useState([]);

  useEffect(() => {
    const getIssues = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/getissues');
        setData(response.data.msg);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    getIssues();
  }, []);

  return (
    <div>
          <h3 className='text-center mt-4 mb-4' style={{ color: '#007bff' }}>Your Raised Issues</h3>
      {data &&
        data.map((item) => <ViewIssueCard key={item._id} {...item}  />)}
    </div>
  );
}

export default ViewIssues;
