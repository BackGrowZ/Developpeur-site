import React from 'react'
import FormulaireContact from '../ScriptDL/FormulaireContact'
import Tel from '../img/contact_tel.webp'
import Email from '../img/contact_email.webp'
import Localisation from '../img/contact_localisation.webp'
import CardFlip from './CardFlip'

export default function Contact() {
    return (
        <div id='container-contact'>
            <div className='categorie-title'>
                <h1>
                    <i className='fas fa-handshake' /> Contact
                </h1>
            </div>
            <div id='all-contact'>
                <CardFlip title='Téléphone' description={<a style={{color:'inherit'}} target='_blank' rel='noopener noreferrer' href='tel:+33658930421'>06 58 93 04 21</a>} taille='200px' classOf='contact-info' margin='10px' link={null} techno={null} visuel={Tel} />
                <CardFlip title='Email' description={<a style={{color:'inherit'}} target='_blank' rel='noopener noreferrer' href='mailto:anthony.carreta@gmail.com'>anthony.carreta@gmail.com</a>} taille='200px' classOf='contact-info' margin='10px' link={null} techno={null} visuel={Email} />
                <CardFlip title='Localisation' description={<>Lille<br />Nantes</>} taille='200px' classOf='contact-info' margin='10px' link={null} techno={null} visuel={Localisation} />
            </div>
            <FormulaireContact />
        </div>
    )
}


