import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Constants from './constants';

function App() {
  const [data, setData] = useState({ institutes: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(
          Constants.GRAPHQL_API, {
          query: Constants.GET_LIST
        }
      );
      const result = queryResult.data.data; 
      console.log('====================================');
      console.log(result.institutes.data);
      console.log('====================================');
      setData({ institutes: result.institutes.data });
    };
 
    fetchData();
  },[]); 
 
  return (
    <div>
      <h1>{Constants.TITLE}</h1>
      <ul>
        {data.institutes.map(item => (
          <li key={item.id}>
            {item.attributes.institute_name}
            {item.attributes.branches.data.map(bitem=>(
              <strong key={bitem.id}>
              {bitem.attributes.branch_name}
              {bitem.attributes.courses.data.map(citem=>(
                <i key={citem.id}>
                   {citem.attributes.course_name}
                </i>
              ))}
              </strong>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
