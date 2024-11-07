import React from 'react';

import './about.scss';
import aboutDog from '../../../../../../public/imgs/about-dog.png';

export default function About() {
    return (
        <div className='aboutSection'>
            <div className='layout'>
                <img className='aboutDog' src={aboutDog} alt="Dog" />
                <div className='textContent'>
                    <p>Groomit</p>
                    <h2>On-Demand Cat & Dog Grooming Done Differently</h2>
                    <p>Capicola mollit swine aute, minim cupim frankfurter kielbasa. Chicken elit magna dolor bresaola velit. Qui est ball tip pork belly pariatur eu strip steak consequat labore aliqua salami ground round. Sint aliquip venison est shoulder swine exercitation dolor.</p>
                </div>
            </div>
        </div>
    )
}
