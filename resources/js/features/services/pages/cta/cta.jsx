import React from 'react';
import { PiDog } from "react-icons/pi";

import './cta.scss';
import ctaDog from '../../../../../../public/imgs/services-cta.png'

export default function Cta() {
    return (
        <div className='servicesCtaSection'>
            <div className='layout'>
            <img src={ctaDog} alt="Call to action dog" />
                <div className='content'>
                    <div>
                        <h2 className='servicesCtaTitle'>Get in touch</h2>
                        <p className='servicesCtaText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.</p>
                    </div>
                    <button>
                        <span className="icon">
                            <PiDog />
                        </span>
                        <span className="text">Boka Nu</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
