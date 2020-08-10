// import React, { useState, useEffect } from 'react'
import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

export default function Navbar() {
    // const defaultStyleNavbar = {backgroundColor:'transparent'}
    const customStyleNavbar = { backgroundColor: '#fff', height: '1rem' }
    // const scrollY = window.screenY
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = scrollY
    //     }, ); 
    // }, [scrollY])
    // if (height)
    // const [styleNavbar, setstyleNavbar] = useState('transparent')
    const navbarElement = [
        ['brain', 'Compétence', '#competence'],
        ['file', 'CV', '#cv'],
        ['code', 'Portfolio', '#link'],
        ['handshake', 'Contact', '#link']
    ]
    const navbar = navbarElement.map((value, key) =>
        <div key={`container-${key}`} className='Navbar-items' onClick={() => console.log(document.getElementById(value[2]))}>
            <ScrollIntoView selector={value[2]}>
                <i key={`icon-${key}`} className={`fas fa-${value[0]}`} />
                <span key={`label-${key}`}>{value[1]}</span>
            </ScrollIntoView>
        </div>
    )
    return (
        <div id='Navbar' style={customStyleNavbar}>
            {navbar}
        </div>
    )
}
