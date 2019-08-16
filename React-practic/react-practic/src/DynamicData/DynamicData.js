import React from 'react';

export default () => (
    <div>
      This is dynamic component  
      <div>
       Если мы хотим, чтоб что-то выводилось динамически просто заключить в фигурные скобки
       {/* {} Означает, что сейчас будет код с JS */}
       <p>Тут будет сумма {1+1}</p>
       <p>Или вот см. вниз</p>
       <p>Например <strong>{Math.round(Math.random()*100)}</strong></p>
      </div>    
    </div>
)


