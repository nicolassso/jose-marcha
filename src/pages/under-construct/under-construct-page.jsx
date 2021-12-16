import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './under-construct-page.styles.scss'



const UnderConstruct = () => {


    //getting data from MySQL !! it is working omg

    const [cuadros, setCuadros] = useState([])

    const getDataFromApi = async () => {
        try {
            const res = await axios.get("http://localhost:3001/api/cuadros")
            setCuadros(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromApi()    
    }, [])
    console.log(cuadros)

    

    return(
    <div className="under-construct">
        <span className="text"><p className="dot-typing">...</p></span>
    </div>
    )
}


export default UnderConstruct;