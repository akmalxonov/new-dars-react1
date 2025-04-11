import React from 'react';
import '../analysis/analysis.scss'
import { MdOutlineFileDownload } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import { TbUsers } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
const Analysis = () => {
    return (
        <div className='analysis'>
            <div className="container">
                <h2>Shiddat bilan o‘sayotgan 
                Khan Academy</h2>
                <p>We’re dedicated to improving the experience and perfomance of Webbrain UI</p>
                <ul className="analysis_list">
                    <li className="item">
                        <h3>1.2M</h3>
                        <h6><MdOutlineFileDownload /> Download per month</h6>
                    </li>
                    <li className="item">
                        <h3>25.1K</h3>
                        <h6><VscGithubAlt /> GitHub stars</h6>
                    </li>
                    <li className="item">
                        <h3>14</h3>
                        <h6><TbUsers /> Core contributors</h6>
                    </li>
                    <li className="item">
                        <h3>6.2K</h3>
                        <h6><FaDiscord /> Discord members</h6>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Analysis;
