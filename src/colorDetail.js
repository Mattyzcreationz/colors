import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorDetail = () => {
  const { color } = useParams();
  const availableColors = ['red', 'blue', 'green', 'yellow', 'green']; 
  
  const colorExists = availableColors.includes(color);

  if (!colorExists) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h1>{color}</h1>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default ColorDetail;
