import React from 'react'

export default function Navbar() {
    const navbarElement = [
        ['brain', 'Compétence', '#link'],
        ['file', 'CV', '#link'],
        ['code', 'Portfolio', '#link'],
        ['handshake', 'Contact', '#link']
    ]
    const navbar = navbarElement.map((value, key) =>
        <div key={`container-${key}`} className='Navbar-items'>
            <i key={`icon-${key}`} className={`fas fa-${value[0]}`} />
            <span key={`label-${key}`}>{value[1]}</span>
        </div>
    )
    return (
        <div id='Navbar'>
            {navbar}
        </div>
    )
}
