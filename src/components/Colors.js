import React, {  useState } from 'react';
import Dropdown from '../components/Dropdown';

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];

const Colors = () => {
  const [color, setColor] = useState(options[0])
  return(
    <div>
      <Dropdown 
        label="Select a Color"
        options={options}
        selected={color}
        onSelectedChange={setColor}
      />
      <h1 style={{color:color.value}}> TEXT</h1>
    </div>
  )
}

export default Colors;