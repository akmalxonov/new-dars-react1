import React from 'react';
import '../team/team.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import TeamImg1 from '../../assets/team-img1.png';
import TeamImg2 from '../../assets/team-img2.png';
import TeamImg3 from '../../assets/team-img3.png';
import TeamImg4 from '../../assets/team-img4.png';
const Team = () => {
    return (
        <div className='team'>
            <div className="container">
                <h2>Bizning professional <span>jamoamiz</span></h2>
                <p>A collection of websites and projects built with Webbrain UI</p>
                <a href="#" className='see'>Ko‘proq ko‘rish <FaArrowRightLong /></a>
                <div className="team_list">
                    <div className="card">
                        <img src={TeamImg3} alt="" />
                        <div className="info">
                            <h4>Cameron Williamson</h4>
                            <h5>Backend Developer</h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src={TeamImg4} alt="" />
                        <div className="info">
                            <h4>Brooklyn Simmons</h4>
                            <h5>Fronted Developer</h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src={TeamImg2} alt="" />
                        <div className="info">
                            <h4>Savannah Nguyen</h4>
                            <h5>UX/UI Designer</h5>
                        </div>
                    </div>
                    <div className="card">
                        <img src={TeamImg1} alt="" />
                        <div className="info">
                            <h4>Darlene Robertson</h4>
                            <h5>Copywriter</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
