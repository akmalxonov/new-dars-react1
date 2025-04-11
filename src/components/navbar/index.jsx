import React from 'react';
import '../navbar/navbar.scss';
import Logo from "../../assets/khan-logo.svg";
import Photo from "../../assets/khan-photo.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="hamburger">
                    <RxHamburgerMenu  className='gamburger'/>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="avatar">
                        <img src={Photo} alt="" />
                    </div>
                    <ul className="nav__list">
                        <li className="item">
                            <a href="#" className='link'>
                            Asosiy
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            Kurslarimiz <FaChevronDown className='down'/>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            Blog
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            Biz haqimizda
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            Bog’lanish
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            <IoSearchSharp className='search'/>
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            EN <FaChevronDown className='down' />
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className='link'>
                            Kirish
                            <FaArrowRightLong className='right' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
