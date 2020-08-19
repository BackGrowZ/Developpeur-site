import React from 'react'

export default function CardFlip(props) {
    const { visuel, title, link, techno, description } = props

    const front =
        <div className='frontcard'>
            <i className='fas fa-arrow-circle-right fa-2x help' />
            <img src={visuel} className='img-card' alt={title} />
        </div>

    const back =
        <div className='backcard'>
            <div className='title-project'>
                <h2>{title}</h2>
            </div>

            <div className='desc-project'>
                <p>{description}</p>
            </div>

            <div className='techno-project'>
                {
                    (techno) ?
                        <>
                            <h4>Liste des techno utilisé: </h4>
                            <p>{techno.map(value => value + ' ')}</p>
                        </>
                        :
                        null
                }
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