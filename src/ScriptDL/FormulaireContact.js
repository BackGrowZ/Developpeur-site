import React, { useState } from 'react'
import './formulaireContact.css'

export default function FormulaireContact() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [sujet, setSujet] = useState('')
    const [message, setMessage] = useState('')

    const MiseEnPage = (string) => (encodeURIComponent(string).replace(/%0A/g, '%0D%0A'))

    const signature = '%0A' + prenom + ' ' + nom + '%0A' + email

    const reset = () => {
        setNom('')
        setPrenom('')
        setEmail('')
        setSujet('')
        setMessage('')
    }

    const UpdateState = (e) => {
        switch (e.target.id) {
            case 'cf-nom':
                setNom(e.target.value)
                break;
            case 'cf-prenom':
                setPrenom(e.target.value)
                break;
            case 'cf-email':
                setEmail(e.target.value)
                break;
            case 'cf-sujet':
                setSujet(e.target.value)
                break;
            case 'cf-message':
                setMessage(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <div className="console-form" id="console-form">
            <div className="cf-row" id="taskbar">
                <p id="title">me_contactez.sh</p>
                <ul id="buttons" className="buttons">
                    <li id="red" className="button" />
                    <li id="yellow" className="button" />
                    <li id="green" className="button" />
                </ul>
                <ul id="buttons2" className="buttons">
                    <li id="red" className="button" />
                    <li id="yellow" className="button" />
                    <li id="green" className="button" />
                </ul>
            </div>
            <div id="console" className="cf-row">
                <div className="cf-container">
                    <form>
                        <div className="cf-line-row">
                            <label>prenom</label>
                            <input id="cf-prenom" onChange={UpdateState} type="text" className="focus" placeholder="Votre prénom" value={prenom} />
                        </div>
                        <div className="cf-line-row">
                            <label>nom</label>
                            <input id="cf-nom" onChange={UpdateState} type="text" className="focus" placeholder="Votre nom" value={nom} />
                        </div>
                        <div className="cf-line-row">
                            <label>email</label>
                            <input id="cf-email" onChange={UpdateState} type="text" placeholder="Votre email" value={email} />
                        </div>
                        <div className="cf-line-row">
                            <label>objet</label>
                            <input id="cf-sujet" onChange={UpdateState} type="text" placeholder="Objet du message" value={sujet} />
                        </div>
                        <div className="cf-line-row" id="message-row">
                            <label>message</label>
                            <textarea id="cf-message" onChange={UpdateState} rows="2" cols="auto" placeholder="Votre message" value={message} />
                        </div>
                        <div className="cf-line-row" id="submit-row">
                            <div className="label" id="submit-label">envoyer</div>
                            <div id="cf-submit-button" onClick={() => setTimeout(() => { reset() }, 2000)} className="cf-button"><a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer" href={`mailto:anthony.carreta@gmail.com?subject=${MiseEnPage(sujet)}&body=${MiseEnPage(message)}%0A${signature}`}>[Envoyer]</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


/*
code original => https://codepen.io/samurai-mac/pen/YvRweN
*/