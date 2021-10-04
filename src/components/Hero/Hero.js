import React, {useState, useEffect} from 'react'
import '../../styles/hero.css'

const Hero = () => {

    const [time, setTime] = useState("")

    var today = new Date()
    var curHr = today.getHours()

    useEffect(() => {
        if (curHr < 12) {
            setTime("¡Buenos días!")

          } else if (curHr < 20) {
            setTime("¡Buenas tardes!")
            
          } else {
            setTime("¡Buenas noches!")
          }
    }, [])

    return (
        <header className = "hero-container">
            <h1 className = "hero-title">{time}</h1>
            <p className="title-description">Encuentra los nuevos bundles de</p>
            <a className="humble-bundle" href="https://www.humblebundle.com/bundles?hmb_source=navbar">Humble bundle</a>
        </header>
    )
}

export default Hero
