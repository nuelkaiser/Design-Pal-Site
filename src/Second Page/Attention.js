import React from 'react'

function Attention({src, alt}) {
    return (
        <div className='Attention'>

            <img className='Founder-img' src={src} alt={alt}/>
            <h3>
                Using Lorem ipsum to focus attention
            </h3>

            <p>
                Benefit 0.1
            </p>

        </div>
    )
}

export default Attention
