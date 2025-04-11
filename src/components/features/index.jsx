import React from 'react';
import '../features/features.scss'
import Icon1 from '../../assets/features-icon1.svg'
import Icon2 from '../../assets/features-icon2.svg'
const Features = () => {
    return (
        <div className='features'>
            <div className="container">
                <h2>Bizning ustun <span>jihatlarimiz</span></h2>
                <h6>Quyida bizning ustun jihatlarimiz bilan tanishing</h6>
                <div className="wrapper">
                    <div className="card">
                        <img src={Icon1} alt="" />
                        <h5>Kuchli Mentorlar</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                    <div className="card">
                        <img src={Icon2} alt="" />
                        <h5>Muntazam o’rganish</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                    <div className="card">
                        <img src={Icon1} alt="" />
                        <h5>Qulay muhit</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                    <div className="card">
                        <img src={Icon1} alt="" />
                        <h5>Intensiv Darslar</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                    <div className="card">
                        <img src={Icon1} alt="" />
                        <h5>Ahil Jamoa</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                    <div className="card">
                        <img src={Icon1} alt="" />
                        <h5>Amaliy darslar</h5>
                        <p>Webbrain UI strictly follows WAIARIA standarts for all components strictly follows.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
