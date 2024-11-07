import React from 'react';

import './footer.scss';
import dog from '../../../../public/imgs/footer.png';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className='layout'>
                <div className='map-content'>
                    <div className='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.7664884745495!2d17.925438423882174!3d59.526706600636416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9861332acc1f%3A0x349c5e613c9a5618!2sBESAB%20AB!5e0!3m2!1ssv!2sse!4v1729127338447!5m2!1ssv!2sse"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '10px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className='content'>
                        <div className='top'>
                            <div className='section contact'>
                                <h3>Kontakta oss</h3>
                                <p>
                                    <strong>Adress: </strong> <a href="" target='_blank'>Västra Vintergatan 9, 703 44 Örebro</a>
                                </p>
                                <p>
                                    <strong>Telefon: </strong>
                                    <a href='tel:08-123 45 67'>08-123 45 67</a>
                                </p>
                                <p>
                                    <strong>E-post: </strong>
                                    <a href='mailto:example@gmail.com'>example@gmail.com </a>
                                </p>
                            </div>
                            <div className='section openingHours'>
                                <h3>Öppettider</h3>
                                <p>
                                    <strong>Trimmet: </strong>
                                    <span>Måndag till Fredag efter tidsbokning.</span>
                                </p>
                                <p>
                                    <strong>Butiken: </strong>
                                    <span>Måndag till Torsdag eller enligt överenskommelse.</span>
                                </p>
                            </div>
                        </div>

                        <div className='bottom'>
                            <div className='textContent'>
                                <h3>Heading</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minus, maxime voluptatem sunt est, vel praesentium, quae velit fuga modi esse dignissimos id harum qui fugiat. Amet quisquam quidem similique.</p>
                            </div>
                            <img src={dog} alt="" />
                        </div>
                    </div>
                </div>
                <div className='copyright-creator'>
                    <div className='creator'>
                        <p>
                            Created by&nbsp;
                            <a href='http://127.0.0.1:8000/' target='_blank'>Bagher Hosseini</a>
                            &nbsp;and&nbsp;
                            <a href='http://127.0.0.1:8000/' target='_blank'>Lucas Larsson</a>
                        </p>
                    </div>
                    <div className='copy'>
                        <p> Copyright &copy; {year} Hundrummet</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
