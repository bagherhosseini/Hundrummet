import React from 'react';

import './home.scss';
import * as features from '../../features';

export default function Home() {
    return (
        <section className='homeSection'>
            <features.Landing />
            <features.About />
            <features.ClientTestimonials />
            <features.Gallery />
        </section>
    )
}
