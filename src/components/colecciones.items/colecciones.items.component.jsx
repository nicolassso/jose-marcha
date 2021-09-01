import React from 'react'


import './colecciones-items.styles.scss';


const ColeccionItem = ({item}) => {
   const { name, city, year } = item;

  return (
    <div className='colecciones-item'>
        <div className="colecciones-header">
            <span className="title">{name}</span>
        </div>
        <div className="colecciones-body">            
            <span className='city'>{city}</span>
            <span className='year'>{year}</span>
        </div>
    </div>
  );
};


export default ColeccionItem;