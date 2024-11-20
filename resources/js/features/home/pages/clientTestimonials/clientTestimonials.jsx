import React from 'react';

import './clientTestimonials.scss';

export default function ClientTestimonials() {
    return (
        <div className='clientTestimonialsSection'>
            <div className='layout'>
                <div className='heading'>
                    <h2>What Our Clients Say</h2>
                    <p>Client Testimonials</p>
                </div>
                <div className='testimonials'>
                    <div className='testimonial'>
                        <h3>"Very Professional"</h3>
                        <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iure rerum repellendus, totam, delectus eligendi ipsa labore aperiam at nostrum quis.</p>
                        <p className='name'>Lucas</p>
                    </div>
                    <div className='divider' />
                    <div className='testimonial'>
                        <h3>"Very Professional"</h3>
                        <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iure rerum repellendus, totam, delectus eligendi ipsa labore aperiam at nostrum quis.</p>
                        <p className='name'>Bagher</p>
                    </div>
                    <div className='divider' />
                    <div className='testimonial'>
                        <h3>"Very Professional"</h3>
                        <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt iure rerum repellendus, totam, delectus eligendi ipsa labore aperiam at nostrum quis.</p>
                        <p className='name'>Peter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
