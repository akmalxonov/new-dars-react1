import React from 'react';
import '../howItWorks/works.scss'
import WorkImg from '../../assets/watch video.png'
import HomeImg from '../../assets/home-image.png'
import { FaStar } from "react-icons/fa6";

const Works = () => {
    return (
        <div className='learnMore'>
            <div className="container">
                <h2>Kam vaqtda <span>ko‘proq o‘rganish</span></h2>
                <p>Khan akademiyasida juda qisqa muddatda istalgan 
                dasturlash sohasida Junior darajasiga chiqa olasiz</p>
                <div className="all">
                    <img src={WorkImg} alt="" />
                    <div className="card">
                        <img src={HomeImg} alt="" />
                        <ul className='list'>
                            <li className='item'>
                                <a href="#" className='link'>PLUS</a>
                            </li>
                            <li className='item'>
                                <a href="#" className='link'>VERIFIED</a>
                            </li>
                            <li className='item'>
                                <a href="#" className='link'>CAPE TOWN</a>
                            </li>
                        </ul>
                        <h4>Modern, Chic Penthouse</h4>
                        <h5><span>$119</span>/night</h5>
                        <div className="review">
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <h6>4.5 <span>(190)</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;