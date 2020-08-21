import React from 'react'
import FormulaireContact from '../ScriptDL/FormulaireContact'
import Tel from '../img/contact_tel.png'
import Email from '../img/contact_email.png'
import Localisation from '../img/contact_localisation.png'
import CardFlip from './CardFlip'

export default function Contact() {
    return (
        <div id='container-contact'>
            <div className='categorie-title'>
                <h1>
                    <i className='fas fa-handshake' /> Contact
                </h1>
            </div>
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: 'auto' }}>
                    <CardFlip title='Téléphone' description='06 58 93 04 21' taille='200px' link={null} techno={null} visuel={Tel} />
                    <CardFlip title='Email' description='anthony.carreta@gmail.com' taille='200px' link={null} techno={null} visuel={Email} />
                    <CardFlip title='Localisation' description={<>Lille<br />Nantes</>} taille='200px' link={null} techno={null} visuel={Localisation} />
                </div>
                <FormulaireContact />
            </div>
        </div>
    )
}


