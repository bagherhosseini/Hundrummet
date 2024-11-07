import React, { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import './service.scss';

export default function Service({pageData, pageDirection}) {
    const [selected, setSelected] = useState(0);
    const handleChange = (index) => {
        setSelected((prevSelected) => (prevSelected === index ? null : index));
    };

    return (
        <div className='serviceSection'>
            <div className='layout' style={{ "flexDirection": pageDirection }}>
                <img className='aboutDog' src={pageData.img} alt="Dog" />
                <div className='textContent'>
                    <h2>{pageData.title}</h2>
                    {
                        pageData.serviceInfo.map((service, index) => (
                            <div key={service.id}>
                                <input
                                    className='collapseCheckbox'
                                    id={`collapseCheckbox${service.id}`}
                                    type="checkbox"
                                    checked={selected === index}
                                    onChange={() => handleChange(index)}
                                />
                                <div className='collapse'>
                                    <label className='heading' htmlFor={`collapseCheckbox${service.id}`}>
                                        <div className='headingText'>
                                            <FaRegCircleCheck className='serviceCategoryIcon serviceCategoryCheckIcon' />
                                            <h3>{service.title}</h3>
                                        </div>
                                        <FiPlus className='plusIcon icon' />
                                        <FiMinus className='minusIcon icon' />
                                    </label>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
