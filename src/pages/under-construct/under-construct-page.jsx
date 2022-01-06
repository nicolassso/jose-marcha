import { CloudinaryContext, Image } from 'cloudinary-react'
import React from 'react'

import './under-construct-page.styles.scss'


const UnderConstruct = ({cuadros}) => {
    console.log(cuadros.map(cuadro=>cuadro.image))
    return(
    <div className="under-construct">
        <span className="text"><p className="dot-typing">...</p></span>
        <CloudinaryContext cloudName="dn2k6sthd">
            <div>
                <Image publicId="https://res.cloudinary.com/dn2k6sthd/image/upload/v1641471647/marcha/abstractos/abstracto-volcan-3_ycoesg.jpg" width="800" />
            </div>
        </CloudinaryContext>
        {
        cuadros.map(cuadro => {
            return(
                <div key={cuadro.id} style={{
                    margin: '20px',
                    textAlign: 'center' 
                }}>
                    <h1>{cuadro.name}</h1>
                    <h2>{cuadro.author}</h2>
                    <h3>{cuadro.collection}</h3>
                    <h4>{cuadro.description}</h4>
                    <h3>{cuadro.price}</h3>
                    <img src={cuadro.image} alt="" width={"180px"}></img>
                </div>

                    )
                }
            )
        }
    </div>
    )
}


export default UnderConstruct;