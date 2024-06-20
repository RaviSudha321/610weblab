import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import Button from "../Button/Button";
import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

function Header(){

    const {pathname} = useLocation();
    const [headerClass, setHeaderClass] = useState('');
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSubMenus, setActiveSubMenus] = useState([]);
    
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY > 20){
                setHeaderClass('sticky_header');
            } else {
                setHeaderClass('');
            }
        })
    }, [headerClass]);

    useEffect(()=>{
        setActiveMenu(false);
        setActiveSubMenus([]);
    }, [pathname])

    const handleMobileSubMenu = (index) => {
        if (activeSubMenus.includes(index)) {
            // Remove the item and update the state
            setActiveSubMenus(activeSubMenus.filter(item => item !== index));
        } else {
            // Add the item and update the state
            setActiveSubMenus((subMenus)=>[...subMenus, index])
        }
    }

    return(
        <header id="header" className={`header_sec ${headerClass}`}>
            <div className="container">
                <div className='header_content'>
                    <div className="header_left_col">
                        <div className="header_logo">
                            <NavLink to="/"><img src="images/logo.png" alt="logo" /></NavLink>
                        </div>
                    </div>
                    <div className="header_right_col">
                        <div className={`header_right_col_content ${activeMenu ? 'active' : ''}`}>
                            <div className="header_menu">
                                <nav className="navigation">
                                    <ul className='menu'>
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/web-design">Web Design</NavLink>
                                        </li>
                                        <li className={`has_sub_menu ${activeSubMenus.includes(3) ? 'active_sub_menu' : ''}`}>
                                            <NavLink to="javascript:void(0)" onClick={(e)=>{e.preventDefault(); handleMobileSubMenu(3)}}>
                                                Web Development
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1347_921)">
                                                    <path d="M0.827169 2.25809C0.687521 2.29031 0.625216 2.33328 0.356662 2.59754C0.053732 2.89617 2.1064e-05 2.98641 2.1064e-05 3.21199C2.1064e-05 3.50848 -0.169705 3.31941 2.6383 6.12742C5.41194 8.9032 5.24651 8.75281 5.51076 8.75066C5.77072 8.74851 5.63752 8.87098 8.37893 6.11883C9.75608 4.73523 10.9055 3.56434 10.9356 3.51492C10.9828 3.43758 10.9893 3.4032 10.9893 3.22273C10.9893 3.04012 10.9828 3.00789 10.9313 2.92195C10.9012 2.86824 10.7594 2.71355 10.6197 2.57605C10.3211 2.28172 10.2524 2.24734 10.0074 2.26023C9.91721 2.26453 9.81408 2.28602 9.76467 2.3075C9.70451 2.33543 9.0299 2.995 7.5883 4.43445L5.50002 6.52059L3.40959 4.4323C1.74885 2.77156 1.30197 2.33543 1.22463 2.30105C1.10432 2.24949 0.938888 2.2323 0.827169 2.25809Z" fill="#2D3748"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1347_921">
                                                    <rect width="11" height="11" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>        
                                            </NavLink>
                                            <ul className="sub_menu">
                                                <li>
                                                    <NavLink to="/web-development">Web Development</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/php-development">PHP Development</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/shopify-development">Shopify Development</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/open-source-development">Open Source</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/digital-marketing">Digital Marketing</NavLink>
                                        </li>
                                        {/*<li className={`has_sub_menu ${activeSubMenus.includes(4) ? 'active_sub_menu' : ''}`}>
                                            <NavLink to="/digital-marketing" onClick={(e)=>{e.preventDefault(); handleMobileSubMenu(4)}}>
                                                Digital Marketing
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1347_921)">
                                                    <path d="M0.827169 2.25809C0.687521 2.29031 0.625216 2.33328 0.356662 2.59754C0.053732 2.89617 2.1064e-05 2.98641 2.1064e-05 3.21199C2.1064e-05 3.50848 -0.169705 3.31941 2.6383 6.12742C5.41194 8.9032 5.24651 8.75281 5.51076 8.75066C5.77072 8.74851 5.63752 8.87098 8.37893 6.11883C9.75608 4.73523 10.9055 3.56434 10.9356 3.51492C10.9828 3.43758 10.9893 3.4032 10.9893 3.22273C10.9893 3.04012 10.9828 3.00789 10.9313 2.92195C10.9012 2.86824 10.7594 2.71355 10.6197 2.57605C10.3211 2.28172 10.2524 2.24734 10.0074 2.26023C9.91721 2.26453 9.81408 2.28602 9.76467 2.3075C9.70451 2.33543 9.0299 2.995 7.5883 4.43445L5.50002 6.52059L3.40959 4.4323C1.74885 2.77156 1.30197 2.33543 1.22463 2.30105C1.10432 2.24949 0.938888 2.2323 0.827169 2.25809Z" fill="#2D3748"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1347_921">
                                                    <rect width="11" height="11" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>    
                                            </NavLink>
                                            <ul className="sub_menu">
                                                <li>
                                                    <NavLink to="#">WordPress</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="#">Shopify</NavLink>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li>
                                            <NavLink to="/about-us">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/portfolio">Portfolio</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <Button
                            title="Request A Quote"
                            icon={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1347_1197)">
                                    <path d="M1.78448 0.0778599C0.943664 0.323954 0.279211 1.00071 0.0618284 1.83333C0.00850812 2.03841 0.000304994 3.17044 0.000304994 10.4917C0.000304994 19.8433 -0.0202028 19.1132 0.27511 19.7038C0.467883 20.0853 0.898547 20.52 1.2923 20.721C1.8378 21.004 1.8378 21.004 4.28234 20.9917C6.42335 20.9794 6.47667 20.9794 6.58741 20.8933C6.64894 20.8482 6.75968 20.7415 6.8253 20.6554C6.94425 20.5118 6.95245 20.4749 6.95245 20.1796C6.95245 19.8843 6.94425 19.8474 6.8253 19.7038C6.5464 19.3552 6.73507 19.3839 4.37667 19.3593C2.42843 19.3388 2.26847 19.3347 2.13312 19.2609C1.93214 19.1542 1.85011 19.0763 1.74757 18.8876L1.66144 18.7236V10.4999C1.66144 2.5429 1.66554 2.2722 1.73937 2.13274C1.84601 1.93177 1.92394 1.84974 2.11261 1.7472C2.27667 1.66106 2.28077 1.66106 6.06241 1.64876L9.84406 1.63645V3.0597C9.84406 4.6429 9.85636 4.74544 10.1189 5.26634C10.3116 5.64778 10.7423 6.08255 11.136 6.28352C11.6487 6.55013 11.7595 6.56243 13.3468 6.56243H14.7659V6.94798C14.7659 7.37864 14.8028 7.50989 14.9628 7.68626C15.295 8.03899 15.8775 8.03899 16.2097 7.68626C16.3901 7.48938 16.4066 7.39095 16.4066 6.41477C16.4066 5.65188 16.3943 5.47141 16.3409 5.36067C16.2548 5.18841 11.3575 0.274734 11.1196 0.118876L10.9351 -7.05719e-05L6.48487 0.00403214C2.36691 0.00403214 2.01007 0.0122356 1.78448 0.0778599ZM13.4452 4.9177C13.3919 4.92591 13.0761 4.9218 12.7357 4.9136C11.9564 4.8931 11.7882 4.81927 11.5831 4.42962C11.5216 4.31067 11.5052 4.16302 11.4929 3.56829L11.4765 2.85052L12.506 3.87591C13.3796 4.74134 13.5232 4.9054 13.4452 4.9177Z" fill="#30A9E0"/>
                                    <path d="M3.6627 7.98164C3.4084 8.1334 3.28125 8.37129 3.28125 8.69531C3.28125 9.02344 3.4084 9.26133 3.6668 9.41309L3.84316 9.51562H8.20312H12.5631L12.7395 9.41309C12.9979 9.26133 13.125 9.02344 13.125 8.69531C13.125 8.36719 12.9979 8.1293 12.7395 7.97754L12.5631 7.875H8.19902H3.83496L3.6627 7.98164Z" fill="#30A9E0"/>
                                    <path d="M17.4932 8.7321C17.3783 8.78543 16.1643 9.97898 13.5557 12.5958C9.39668 16.7671 9.56074 16.5907 9.24492 17.4274C9.09316 17.8294 8.6543 19.8966 8.6543 20.2083C8.6543 20.5077 8.88809 20.8522 9.15879 20.9548C9.37207 21.0368 9.7002 20.9999 10.7297 20.7948C12.1447 20.5077 12.4441 20.4052 13.0799 19.9868C13.3752 19.794 14.0109 19.1788 17.0953 16.1026C19.1092 14.0928 20.8072 12.3784 20.8688 12.2882C21.0205 12.0708 21.0451 11.6524 20.9262 11.4186C20.8072 11.1889 18.3955 8.79773 18.2027 8.7157C17.9977 8.63367 17.6941 8.63777 17.4932 8.7321ZM18.416 11.2587L18.9697 11.8124L15.6475 15.1346C13.8182 16.9639 12.2268 18.5266 12.1037 18.6087C11.8166 18.8014 11.5623 18.8958 11.025 19.0106C10.6846 19.0803 10.582 19.0927 10.582 19.0516C10.582 18.9204 10.7502 18.2067 10.824 18.0098C10.8732 17.8909 10.9758 17.6899 11.0578 17.5628C11.1563 17.4069 12.3375 16.1928 14.5113 14.0149C16.3324 12.1938 17.8295 10.705 17.8418 10.705C17.8541 10.705 18.1125 10.9552 18.416 11.2587Z" fill="#30A9E0"/>
                                    <path d="M3.6627 11.2629C3.4084 11.4146 3.28125 11.6525 3.28125 11.9766C3.28125 12.3047 3.4084 12.5426 3.6668 12.6943L3.84316 12.7969L7.45664 12.7887L11.066 12.7764L11.226 12.6492C11.4311 12.4893 11.5664 12.2186 11.5664 11.9766C11.5623 11.6484 11.3408 11.3039 11.0619 11.2014C10.984 11.1686 9.80273 11.1563 7.39102 11.1563H3.83496L3.6627 11.2629Z" fill="#30A9E0"/>
                                    <path d="M3.6627 14.5441C3.4084 14.6959 3.28125 14.9338 3.28125 15.2578C3.28125 15.5859 3.4084 15.8238 3.6668 15.9756L3.84316 16.0781H5.86523H7.8873L8.06367 15.9756C8.32207 15.8238 8.44922 15.5859 8.44922 15.2578C8.44922 14.9297 8.32207 14.6918 8.06367 14.54L7.8873 14.4375H5.86113H3.83496L3.6627 14.5441Z" fill="#30A9E0"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1347_1197">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>}
                            link="/contact-us"
                            />
                        </div>
                        <span className='menu_toggle' onClick={()=>{setActiveMenu((prevState)=>!prevState)}}>
                            {
                                activeMenu ? <RiCloseLargeFill /> : <FaBarsStaggered />
                            }
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;