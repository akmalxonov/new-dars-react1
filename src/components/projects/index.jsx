import React from 'react';
import '../projects/projects.scss'
import img1 from '../../assets/project-img1.png'
import img2 from '../../assets/project-img2.png'
import img3 from '../../assets/project-img3.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {
    return (
        <div className='projects'>
            <div className="container">
                <h2>Kelajagingizni <br className='mobile' /> <span>Khan Academy
                    bilan</span> quring</h2>
                <p>A collection of websites and projects built with Webbrain UI</p>
                <button className="see">Ko’proq ko’rish <FaArrowRightLong className='right' /></button>
                <div className="projects__wrapper">
                    <div className="left">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
