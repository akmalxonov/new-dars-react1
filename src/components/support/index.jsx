import React from 'react';
import '../support/support.scss';
import OpenLogo from '../../assets/open-logo.svg'
import partnersLogo from '../../assets/partners-logo.svg'
import partnersLogo2 from '../../assets/partners-logo2.svg'
const Support = () => {
    return (
        <div className='support'>
            <div className="container">
                <h2>Hamkorlik qilishga tayyormisiz?</h2>
                <p>Our maintainers devote their time, effort, and heart to ensure
                    Webbrain UI keeps getting better. Support us by donating to our
                    collective</p>
                <div className="card">
                    <img src={OpenLogo} alt="" />
                    <div className="title">
                        <h5>Open Collective</h5>
                        <h6>Sponsor the Webbrain UI maintainers</h6>
                    </div>
                    <div className="btn">Sponsor</div>
                </div>
                <div className="card">
                    <img src={OpenLogo} alt="" />
                    <div className="title">
                        <h5>Open Collective</h5>
                        <h6>Sponsor the Webbrain UI maintainers</h6>
                    </div>
                    <div className="btn">Sponsor</div>
                </div>
                <h4>ORGANIZATION SPONSORS</h4>
                <img className='partners' src={partnersLogo} alt="" />
                <h4>INDIVIDUAL SPONSORS</h4>
                <img className='partners' src={partnersLogo2} alt="" />
            </div>
        </div>
    );
}

export default Support;
