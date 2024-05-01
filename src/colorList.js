import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorList = () => {
  const [showForm, setShowForm] = useState(false);
  const [newColor, setNewColor] = useState('');
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow', 'green']);
  const history = useHistory();

  const handleAddColor = (event) => {
    event.preventDefault(); 
    if (newColor.trim()) {
      setColors([newColor, ...colors]); 
      setNewColor(''); 
      setShowForm(false); 
      history.push('/colors'); 
    }
  };

  return (
    <div>
      <h1>Available Colors</h1>
      <ul>
        {colors.map(color => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <button onClick={() => setShowForm(true)}>Add New Color</button>
      {showForm && (
        <div>
          <h2>Add New Color</h2>
          <form onSubmit={handleAddColor}>
            <label htmlFor="colorInput">Select a color:</label>
            <input
              id="colorInput"
              type="color"
              value={newColor}
              onChange={e => setNewColor(e.target.value)}
            />
            <button type="submit">Add Color</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ColorList;
