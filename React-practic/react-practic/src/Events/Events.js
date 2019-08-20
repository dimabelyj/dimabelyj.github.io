import React from 'react';


// Для передачи параметров сперва задаём параметр функции (props), если передаем один параметр, то его можно писать без скобок
export default param => (
    <div>
      This is passing parameters component  
      <div>
        {/* Затем стучимся к этим параметрам 
        (указаны как атрибуты в App.js <PassingParameters name={'Ford'} year = {2018}/>) */}
       <h3>Car name: {param.name}</h3>
       <p>Year: <strong>{param.year}</strong></p>
       {/* Если хотим передать контент во внутрь тега (пример 4-ой машины) то используем следующую надпись */}
       { param.children }
      </div>    
    </div>
)