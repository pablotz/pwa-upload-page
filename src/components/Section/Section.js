import React from 'react'
import '../../styles/section.css'

const Section = ({image, title, ends}) => {
    return (
        <section className="section-container">
            <img className="section-img" alt="sectionIMG" src={image} />

            <div className="section-data">
            <h4 className="article-title">{title}</h4>
                <p className="article-info">
                    Termina el: {ends}
                </p>
            </div>
            
        </section>
    )
}

export default Section
