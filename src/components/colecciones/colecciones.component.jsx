//ESTE COMPONENTE ES PARA LOS COLECCIONISTAS, MUSEOS Y EXPOSICIONES
//ES MUY PARECIDO AL COMPONENTE DE LAS COLECCIONES

import React from 'react'
import './colecciones.styles.scss'
import ColeccionItem from '../colecciones.items/colecciones.items.component';

const Colecciones = ({items, title})  => (
    <div className='colecciones'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .map((item) => (
                    <ColeccionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default Colecciones;