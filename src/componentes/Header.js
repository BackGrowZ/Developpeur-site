import React from 'react'
import Logo from '../img/logo.webp'

export default function Header() {
    return (
        <div id='header-container'>
            <div id='header'>
                <div id='maj' className='header-title'>
                    <div className='container'>
                        <div className='logo'>
                            <div className='backLogo2 rotate2' />
                            <div className='backLogo rotate' />
                            <img src={Logo} height='180px' style={{ marginLeft: '.5rem' }} alt='logo' />
                        </div>
                        <div style={{ marginLeft: '1.5rem' }}>
                            <h1 id='prenom'>Anthony</h1>
                            <h1 id='nom'>Carreta</h1>
                        </div>
                    </div>
                    <h1 id='job'>Développeur Front-End - React.JS </h1>
                </div>
            </div>
        </div>
    )
}
