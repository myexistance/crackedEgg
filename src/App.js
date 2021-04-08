import React, { useState } from 'react';
// const egg = require('/egg.jpeg')
import egg from './egg.jpeg';
// const trump = require('/trump.jpeg')
import trump from './trump.jpeg';

const crackedEgg = {egg, trump}

const mystyle = {
      
      height: "200px",
      width: "200px"
    };

function App (){
  const[selected, setSelected] = useState(crackedEgg.egg)

  return (
    <>
    <img style={mystyle} src={selected} alt='crackedEgg' onClick={()=> setSelected(crackedEgg.trump)}/>
    </>

  )
}

export default App;