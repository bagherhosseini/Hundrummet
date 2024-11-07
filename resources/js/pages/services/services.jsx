import React from 'react';

import './services.scss';
import * as features from '../../features';
// import serviceDog from '../../../../public/imgs/service-dog.png';
// import serviceCat from '../../../../public/imgs/service-cat.png';
import serviceDog from '../../../../public/imgs/dog.png';
import serviceCat from '../../../../public/imgs/cat.jpg';

const serviceData1 = {
    title: 'Cat',
    img: serviceCat,
    serviceInfo: [
        {
            id: 1,
            title: 'Test1',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        },
        {
            id: 2,
            title: 'Test2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        },
        {
            id: 3,
            title: 'Test3',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        }
    ]
};

const serviceData2 = {
    title: 'Dog',
    img: serviceDog,
    serviceInfo: [
        {
            id: 4,
            title: 'Test1',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        },
        {
            id: 5,
            title: 'Test2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        },
        {
            id: 6,
            title: 'Test3',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab aliquam, error inventore tempore impedit, nisi unde tenetur non dicta corrupti? Praesentium, natus? Non nesciunt ducimus atque a nobis molestiae.'
        }
    ]
};

export default function Services() {
    return (
        <section className='servicesSection'>
            <features.ServicesLanding />
            <features.Service pageData={serviceData1} pageDirection={"row"} />
            <features.Service pageData={serviceData2} pageDirection={"row-reverse"} />
            <features.Cta />
        </section>
    )
}
