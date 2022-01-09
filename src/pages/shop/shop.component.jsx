import React from 'react'
import SHOP_DATA from './shop.data';
import COLECCIONES_DATA from './colecciones.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Colecciones from '../../components/colecciones/colecciones.component';


class ShopPage extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            collections: SHOP_DATA,
            colecciones: COLECCIONES_DATA
        }
    }

    render() {
        const {collections, colecciones} = this.state;

        return(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                
            }
            {
                colecciones.map(({id, ...otherColeccionesProps})=>
                (
                    <Colecciones key={id} {...otherColeccionesProps} />
                ))
            }

        </div>)
        
    }
}

export default ShopPage;