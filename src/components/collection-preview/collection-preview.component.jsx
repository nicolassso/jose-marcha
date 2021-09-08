//ESTE COMPONENTE ES PARA lAS COLECCIONES
//ES MUY PARECIDO AL COMPONENTE DE LOS COLECCIONISTAS, MUSEOS Y EXPOSICIONES

import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection.items/collection-item.component';
import { Link } from 'react-router-dom';

const CollectionPreview = ({title, items})  => (
    <div className='collection-preview'>
        <h1 className='title'><Link to='/underConstruct'>{title.toUpperCase()}</Link></h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 1)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;