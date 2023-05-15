import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query=redux')
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        setCount(response.data.hits);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []); // Empty dependency array to execute only once on component mount

  return (
    <>
      <div>
        {count !== null && (
          count.map(item => (
            <div key={item.objectID}>{item.title}</div>
          ))
        ) }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
