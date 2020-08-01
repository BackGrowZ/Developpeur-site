import React from 'react'

export default function Competence() {

    const allCompetence = [
        ['Développement Web', "Développement de sites et d'applications web pour desktop tablette et mobile", "fas fa-desktop"],
        ['Web Animation', 'Animation des page en CSS et JavaScript', 'far fa-eye'],
        ['E-Commerce', "Développement et refonte de site de E-Commerce", "fas fa-shopping-cart"]
    ]

    const myCompetence = allCompetence.map((value, key) =>
        (key % 2) ?
            <div key={`container-${key}`} className='competence-liste-droite'>
                <i className={`${value[2]} fa-7x`} style={{ color: '#1a398b' }} />
                <p className='competence-name' key={`name-${key}`}>{value[0]}</p>
                <p key={`label-${key}`}>{value[1]}</p>
            </div>
            :
            <div key={`container-${key}`} className='competence-liste-gauche'>
                <i className={`${value[2]} fa-7x`} style={{ color: '#1a398b' }} />
                <p className='competence-name' key={`name-${key}`}>{value[0]}</p>
                <p key={`label-${key}`}>{value[1]}</p>
            </div>
    )
    return (
        <div id='competence'>
            <div id='competence-title'>
                <h1>
                    <i className='fas fa-brain' />
                    Compétence
                </h1>
            </div>
            <div id='competence-liste'>
                {myCompetence}
            </div>
        </div>
    )
}
