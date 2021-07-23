import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      await axios
        .get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=5cab12dd3d0c401db7e87a42a58008b3')
        .then((response) => {
          setData(response);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
