import React from 'react';
import { PiDog } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { HiMiniScissors } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

import './landing.scss';
import dog from '../../../../../../public/imgs/home-landing-dog1.png';

export default function Landing() {
    return (
        <div className='landingSection'>
            <div className='layout'>
                <div className='content'>
                    <div className='heading'>
                        <h2>Bringing Convenience to Pet Care test test</h2>
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
                <div className='services'>
                    <div className='service'>
                        <FaRegCircleCheck className='serviceIcon serviceCheckIcon' />
                        <div className='serviceTextContent'>
                            <h3>Pick it!</h3>
                            <p>Pick from our variety of grooming services for dogs & cats.</p>
                            <button>
                                <span className="icon">
                                    <FaArrowRightLong />
                                </span>
                                <span className="text">Learn more</span>
                            </button>
                        </div>
                    </div>
                    <div className='divider' />
                    <div className='service'>
                        <IoCalendarOutline className='serviceIcon' />
                        <div className='serviceTextContent'>
                            <h3>Book it!</h3>
                            <p>Instantly get matched with a professional groomer for a date most convenient for you.</p>
                            <button>
                                <span className="icon">
                                    <FaArrowRightLong />
                                </span>
                                <span className="text">Learn more</span>
                            </button>
                        </div>
                    </div>
                    <div className='divider' />
                    <div className='service'>
                        <HiMiniScissors className='serviceIcon' />
                        <div className='serviceTextContent'>
                            <h3>Groomit!</h3>
                            <p>Sit back and relax as we bring the service to you with all the details at your fingertips.</p>
                            <button>
                                <span className="icon">
                                    <FaArrowRightLong />
                                </span>
                                <span className="text">Learn more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
