import Reactm, {useState, useEffect} from 'react'
import '../../styles/sidebar.css'
import Section from '../Section/Section'

const Sidebar = () => {

    const [bundles, setBundles] = useState([])

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      }

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

    setBundles(arrBundles[getRandomInt(1, 10)])

    }, [])


    return (
        <div className = "side-container">
            <div className = "side-content">
                <h2>Contenidos mas vistos:</h2>
                <ul>
                    <li>Primer contenido</li>
                    <li>Segundo contenido</li>
                    <li>Tercero contenido</li>
                    <li>Cuarto contenido</li>
                </ul>
            </div>

            <div className="side-most-value">
                <h2>Contenido mas votado:</h2>
                {
                    bundles ? 

                    <Section 
                        image = {bundles.thumbnail_url}
                        title = {bundles.name}
                        ends = {bundles.ends_at}
                    />
                      
                    :
                    null
                }
            </div>

        </div>
    )
}

export default Sidebar
