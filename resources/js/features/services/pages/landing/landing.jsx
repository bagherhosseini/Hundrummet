import React from 'react';
import { PiDog } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";

import './landing.scss';
import dog from '../../../../../../public/imgs/home-landing-dog1.png';

export default function ServicesLanding() {
    return (
        <div className='landingSection'>
            <div className='layout'>
                <div className='content'>
                    <div className='heading'>
                        <h2>Bringing Convenience to Pet Care</h2>
                        <h1>In-Home & Mobile Pet Grooming</h1>
                        <p>On-Demand, Upfront Pricing, Instant Booking, Same-Day Availability, and Expert Care for All Furry Friends</p>
                    </div>
                    <button>
                        <span className="icon">
                            <PiDog />
                        </span>
                        <span className="text">Boka Nu</span>
                    </button>
                </div>
                <img className='contentImg' src={dog} alt="dog" />
            </div>

            <div className='cta'>
                <div className='serviceCategories'>
                    <div className='serviceCategory'>
                        <div className='top'>
                            <FaRegCircleCheck className='serviceCategoryIcon serviceCategoryCheckIcon' />
                            <div className='divider' />
                            <h3>Dog Boarding</h3>
                        </div>
                        <ul className='bottom'>
                            <li>Lorem ipsum dolor, sit amet consectetur</li>
                            <li>Accusamus laudantium nisi praesentium</li>
                            <li>Quasi labore reprehenderit iusto alias</li>
                        </ul>
                    </div>

                    <div className='serviceCategory'>
                        <div className='top'>
                            <FaRegCircleCheck className='serviceCategoryIcon serviceCategoryCheckIcon' />
                            <div className='divider' />
                            <h3>Cat Boarding</h3>
                        </div>
                        <ul className='bottom'>
                            <li>Lorem ipsum dolor, sit amet consectetur</li>
                            <li>Accusamus laudantium nisi praesentium</li>
                            <li>Quasi labore reprehenderit iusto alias</li>
                        </ul>
                    </div>

                    <div className='serviceCategory'>
                        <div className='top'>
                            <FaRegCircleCheck className='serviceCategoryIcon serviceCategoryCheckIcon' />
                            <div className='divider' />
                            <h3>Spa and Grooming</h3>
                        </div>
                        <ul className='bottom'>
                            <li>Lorem ipsum dolor, sit amet consectetur</li>
                            <li>Accusamus laudantium nisi praesentium</li>
                            <li>Quasi labore reprehenderit iusto alias</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
