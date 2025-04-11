import React from 'react';
import '../hero/hero.scss';
import Award from '../../assets/award.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <h1><span>Dasturlashni</span> biz bilan qulay
                    muhitda o‘rganing</h1>
                <p>Khan Academy - bu siz izlagan akademiya bo’lib, unda siz juda qisqa muddatda istalgan
                    dasturlash sohasida Junior darajasiga chiqa olasiz! </p>
                <div className="btns">
                    <button className="start">Boshlash <FaArrowRightLong className='rigth'/></button>
                    <button className="gitHub"><FaGithub  className='github'/>GitHub</button>
                </div>
                <a href="#" className='award'>
                    <img src={Award} alt="" />
                    <div className="award-right">
                        <h5>GitNation React Award</h5>
                        <h3>Most Impactful Project <br />
                            to the Community</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Hero;
