import React, { useState, useEffect } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

export default function Navbar() {
    const customStyleNavbar = { backgroundColor: '#fff', padding:'1.5rem 0', borderBottom: 'solid 1px #ddd' }
    const customStyleItem = { color: '#333', textShadow:'none' }
    const [navStyle, setNavStyle] = useState(null);
    const [itemStyle, setItemStyle] = useState(null);
    const [scrollPosition, setSrollPosition] = useState(0);
    const animation = {'navBar':50}

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
        if (position > animation['navBar'] && scrollPosition <= animation['navBar']) {
            setNavStyle(customStyleNavbar)
            setItemStyle(customStyleItem)
        } else if (position < animation['navBar'] && scrollPosition >= animation['navBar']) {
            setNavStyle(null)
            setItemStyle(null)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const navbarElement = [
        ['brain', 'Compétence', '#competence'],
        ['file', 'CV', '#cv'],
        ['code', 'Portfolio', '#portfolio'],
        ['handshake', 'Contact', '#link']
    ]
    const navbar = navbarElement.map((value, key) =>
        <div key={`container-${key}`} className='Navbar-items' style={itemStyle}>
            <ScrollIntoView selector={value[2]}>
                <i key={`icon-${key}`} className={`fas fa-${value[0]}`} />
                <span key={`label-${key}`}>{value[1]}</span>
            </ScrollIntoView>
        </div>
    )
    return (
        <div id='Navbar' style={navStyle}>
            {navbar}
        </div>
    )
}
