import React, { useEffect } from 'react'
import ULTIMA_COLECCION_DATA from './ultima-coleccion.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './ultima-coleccion.styles.scss'

const UltimaColeccionPage = () => {

        const collections = ULTIMA_COLECCION_DATA;

        return(
        <div className='ultima-coleccion-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                
            }

        </div>)
        
}

export default UltimaColeccionPage;