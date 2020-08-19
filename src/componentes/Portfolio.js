import React from 'react'
import CardFlip from './CardFlip'
import Ecommerce from '../img/ecommerce.png'
import GreenFood from '../img/green-food.png'
import Project from '../img/project.jpg'

export default function Portfolio() {

    const accroche = <><p>Vous avez un projet de site ou d'application web ?</p><p>Vous avez les idées, j'ai les connaissances. Ensemble nous avons les moyens !</p></>

    const project =
        [
            ['EasyShop', 'Site de E-commerce', '#link', ['React.JS', 'Redux', 'Firebase'], Ecommerce],
            ['GreenFood', 'Site de recette végetarienne', '#link', ['React.JS', 'Redux', 'Firebase'], GreenFood],

            // ['Votre Projet', 'Vous av', null, ['React.JS ?', 'Redux ?'], Project]
        ]

    const template =
        <div className='container-portfolio'>
            <div className='categorie-title'>
                <h1><i className='fas fa-code' /> Portfolio</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '0 auto' }}>
                {project.map((value, key) =>
                    <CardFlip key={key} title={value[0]} description={value[1]} link={value[2]} techno={value[3]} visuel={value[4]} />
                )}
                <CardFlip title={'Votre Projet'} description={accroche} link={null} techno={null} visuel={Project} />
            </div>
        </div>

    return (
        template
    )
}
