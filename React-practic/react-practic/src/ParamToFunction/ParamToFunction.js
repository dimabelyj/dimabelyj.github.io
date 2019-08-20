import React from 'react';

export default param => (
    <div>
      This is passing parameters component  
      <div>
       <h3>Car name: {param.name}</h3>
       <p>Year: <strong>{param.year}</strong></p>
       <button onClick = {param.onChangeTitle}>Click</button>
      </div>    
    </div>
)