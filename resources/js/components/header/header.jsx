import React from 'react';

import './header.scss';
import logo from '../../../../public/imgs/logo.png';

export default function Header() {
    return (
        <header>
            <div className='layout'>
                <input
                    id='burger'
                    type="checkbox"
                />
                <nav>
                    <div className='burgerContainer'>
                        <label className='burger' htmlFor={`burger`}>
                            <span className='line1' />
                            <span className='line2' />
                            <span className='line3' />
                        </label>
                    </div>

                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className='divider' />
                        {/* <li>
                            <a href="/about">About</a>
                        </li>
                        <li className='divider' /> */}
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        {/* <li className='divider' /> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
