import React from 'react'

export default function CardFlip(props) {
    const { visuel, title, link, techno } = props

    const front =
        <div className='frontcard'>
            <img src={visuel} className='img-card' alt={title} />
        </div>

    const back =
        <div className='backcard'>
            <div className='title-project'>
                <h2>{title}</h2>
            </div>

            <div className='techno-project'>
                <h4>Liste des techno utilisé: </h4>
                {techno.map((value, key) => <p key={`${key}`}>{value}</p>)}
            </div>
            {
                (link) ?
                    <div className='footerCard' onClick={() => window.open(link)}>Visité le site</div>
                    :
                    null
            }
        </div>

    const template =
        <div className="cardflip">
            <div className='content'>
                {front}
                {back}
            </div>
        </div>

    return (
        template
    )
}
