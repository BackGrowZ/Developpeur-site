import React from 'react'
import CardFlip from './CardFlip'
import Moi from '../img/Anthony_Carreta.jpg'

export default function Portfolio() {

    const project =
        [
            ['EasyShop', '#link', ['React.JS', 'Redux', 'Firebase'], Moi],
            ['GreenFood', '#link', ['React.JS', 'Redux', 'Firebase'], Moi],

            ['Votre Projet', null, ['React.JS ?', 'Redux ?'], Moi]
        ]

    const template =
        <div className='container-portfolio'>
            <div className='categorie-title'>
                <h1><i className='fas fa-code' /> Portfolio</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '0 auto' }}>
                {project.map((value, key) =>
                    <CardFlip key={key} visuel={value[3]} title={value[0]} techno={value[2]} link={value[1]} />
                )}
            </div>
        </div>

    return (
        template
    )
}
