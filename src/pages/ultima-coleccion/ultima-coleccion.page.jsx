import React from 'react'
import ULTIMA_COLECCION_DATA from './ultima-coleccion.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './ultima-coleccion.styles.scss'

class UltimaColeccionPage extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            collections: ULTIMA_COLECCION_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return(
        <div className='ultima-coleccion-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                
            }

        </div>)
        
    }
}

export default UltimaColeccionPage;