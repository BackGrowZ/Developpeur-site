import React, { useState, useEffect } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Logo from '../img/header_logo.png'

export default function Navbar() {
    const customStyleNavbar = { backgroundColor: '#fff', padding: '1.5rem 0', borderBottom: 'solid 1px #ddd' }
    const logoTop = { margin: '0 1rem', visibility: 'visible' }
    const customStyleItem = { color: '#333', textShadow: 'none' }
    const [navStyle, setNavStyle] = useState(null);
    const [itemStyle, setItemStyle] = useState(null);
    const [logoStyle, setLogoStyle] = useState({ visibility: 'hidden' });
    const [scrollPosition, setSrollPosition] = useState(0);
    const [mobileNavbarShow, setMobileNavbarShow] = useState(false)

    const mobilemenuShow = () => {
        const nav = (value) => document.getElementById('menuMobile').style.maxHeight = value;
        if (mobileNavbarShow) {
            nav('0%')
        } else {
            nav('100%')
        }
        setMobileNavbarShow(!mobileNavbarShow)
    }

    const handleScroll = () => {
        // if (!document.getElementById('Navbar').style.display === 'none') {
            const position = window.pageYOffset;
            setSrollPosition(position);
            if (position > 50 && scrollPosition <= 50) {
                setNavStyle(customStyleNavbar)
                setItemStyle(customStyleItem)
                setLogoStyle(logoTop)
            } else if (position < 50 && scrollPosition >= 50) {
                setNavStyle(null)
                setItemStyle(null)
                setLogoStyle({ visibility: 'hidden' })
            }
        // }
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
        ['handshake', 'Contact', '#contact']
    ]
    const navbar = navbarElement.map((value, key) =>
        <div key={`container-${key}`} className='Navbar-items' style={itemStyle}>
            <ScrollIntoView selector={value[2]}>
                <i key={`icon-${key}`} className={`fas fa-${value[0]}`} />
                <span key={`label-${key}`}>{value[1]}</span>
            </ScrollIntoView>
        </div>
    )
    const menuMobile =
        <div id='menuMobile'>
            {
                navbarElement.map((value, key) =>
                    <div key={`container-${key}`} onClick={() => mobilemenuShow()} className='Navbar-items' style={{ width: '100%', color: '#333', textShadow: 'none' }}>
                        <ScrollIntoView selector={value[2]}>
                            <i key={`icon-${key}`} className={`fas fa-${value[0]}`} />
                            <span key={`label-${key}`}>{value[1]}</span>
                        </ScrollIntoView>
                    </div>
                )
            }
        </div>
    const templateMobile =
        <>
            <div id='NavbarMobile'>
                <i className='fas fa-bars fa-2x' style={{ cursor: 'pointer' }} onClick={() => mobilemenuShow()} />
            </div>
            {menuMobile}
        </>

    return (
        <>
            {templateMobile}
            <div id='Navbar' style={navStyle}>
                <div id='logoTop' style={logoStyle}>
                    <ScrollIntoView selector='#header'>
                        <img src={Logo} height='50px' alt='logo' />
                    </ScrollIntoView>
                </div>
                <div className='link-navbar'>
                    {navbar}
                </div>
            </div>
        </>
    )
}
