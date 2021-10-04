import React, {useEffect, useState} from 'react'
import '../../styles/mainSection.css'
import Section from '../Section/Section'

const MainSection = () => {

    const [bundles, setBundles] = useState([])
    useEffect(async () => {
    const allBundles = async () => {
        let response = await fetch("https://humble-bundles1.p.rapidapi.com/bundles", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "humble-bundles1.p.rapidapi.com",
                "x-rapidapi-key": "25d9ffe169msh5423d23e9d8ac05p1189efjsnf71e043df5e9"
            }
        })

        return await response.json()
    }

  
    let svBundles = await allBundles()
    let arrItems = []
    let arrBundles = []

    Object.entries(svBundles.bundles).map(([key, value]) => {
        arrItems.push(value)
    })

    arrItems.map((val) => {
        val.map((bund) => {
            arrBundles.push(bund)
        })
    })

    
    setBundles(arrBundles)

    }, [])

    return (
        <div className = "main-container">
            {
                bundles ? 
                
                bundles.map((bundle, index) => {
                    return (
                        <Section 
                    key={index}
                    image = {bundle.thumbnail_url}
                    title = {bundle.name}
                    ends = {bundle.ends_at}

                    />
                    )
                })
                : 
                <div>No se encontro información</div>
            }
        </div>
    )
}

export default MainSection
