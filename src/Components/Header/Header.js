import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import Button from "../Button/Button";
import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Header(){

    const {pathname} = useLocation();
    const [headerClass, setHeaderClass] = useState('');
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSubMenus, setActiveSubMenus] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, [windowWidth])

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

    const handleSubMenu = (index) => {
        if (activeSubMenus == index) {
            // Remove the item and update the state
            setActiveSubMenus(0);
        } else {
            // Add the item and update the state
            setActiveSubMenus(index)
        }
    }

    return(
        <header id="header" className={`header_sec ${headerClass}`}>
            <div className="container">
                <div className='header_content'>
                    <div className="header_left_col">
                        <div className="header_logo">
                            <NavLink to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></NavLink>
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
                                        {
                                            windowWidth > 1024 ?
                                            <li className={`has_sub_menu mega_menu_item ${activeSubMenus == 3 ? 'active_sub_menu' : ''}`}>
                                                <NavLink to="/web-development" onClick={(e)=>{e.preventDefault(); handleSubMenu(3)}}>
                                                    Web Development
                                                    {
                                                        activeSubMenus == 3 ? <FaChevronUp /> : <FaChevronDown />
                                                    }    
                                                </NavLink>
                                                <ul className="sub_menu mega_menu">  
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/php-development"><MdKeyboardDoubleArrowRight /> PHP Development</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/shopify-development"><MdKeyboardDoubleArrowRight /> Shopify Development</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/open-source-development"><MdKeyboardDoubleArrowRight /> Open Source Development</NavLink>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/responsive-website-design-and-development"><MdKeyboardDoubleArrowRight /> Responsive Websites Design & Development</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/wordpress-development"><MdKeyboardDoubleArrowRight /> WordPress Development</NavLink>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/web-development"><MdKeyboardDoubleArrowRight /> Web Development</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/custom-software-development"><MdKeyboardDoubleArrowRight /> Custom Software Development</NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> : 
                                            <li className={`has_sub_menu ${activeSubMenus == 3 ? 'active_sub_menu' : ''}`}>
                                                <NavLink to="/web-development" onClick={(e)=>{e.preventDefault(); handleSubMenu(3)}}>
                                                    Web Development
                                                    {
                                                        activeSubMenus == 3 ? <FaChevronUp /> : <FaChevronDown />
                                                    }  
                                                </NavLink>
                                                <ul className="sub_menu">                                                
                                                    <li>
                                                        <NavLink to="/php-development"><MdKeyboardDoubleArrowRight /> PHP Development</NavLink>
                                                    </li>
                                                    <li>    
                                                        <NavLink to="/shopify-development"><MdKeyboardDoubleArrowRight /> Shopify Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/open-source-development"><MdKeyboardDoubleArrowRight /> Open Source Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/responsive-website-design-and-development"><MdKeyboardDoubleArrowRight /> Responsive Websites Design & Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/wordpress-development"><MdKeyboardDoubleArrowRight /> WordPress Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/web-development"><MdKeyboardDoubleArrowRight /> Web Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/custom-software-development"><MdKeyboardDoubleArrowRight /> Custom Software Development</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        }
                                        {
                                            windowWidth > 1024 ?
                                            <li className={`has_sub_menu mega_menu_item ${activeSubMenus == 4 ? 'active_sub_menu' : ''}`}>
                                                <NavLink to="/digital-marketing-services" onClick={(e)=>{e.preventDefault(); handleSubMenu(4)}}>
                                                    Digital Marketing
                                                    {
                                                        activeSubMenus == 4 ? <FaChevronUp /> : <FaChevronDown />
                                                    }   
                                                </NavLink>
                                                <ul className="sub_menu mega_menu">  
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/digital-marketing-services"><MdKeyboardDoubleArrowRight /> Digital Marketing</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/social-media-marketing"><MdKeyboardDoubleArrowRight /> Social Media Marketing</NavLink>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/seo-services"><MdKeyboardDoubleArrowRight /> SEO Services</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/facebook-ads"><MdKeyboardDoubleArrowRight /> Facebook Ads</NavLink>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/ppc-services"><MdKeyboardDoubleArrowRight /> PPC</NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> : 
                                            <li className={`has_sub_menu ${activeSubMenus == 4 ? 'active_sub_menu' : ''}`}>
                                                <NavLink to="/digital-marketing-services" onClick={(e)=>{e.preventDefault(); handleSubMenu(4)}}>
                                                    Digital Marketing
                                                    {
                                                        activeSubMenus == 4 ? <FaChevronUp /> : <FaChevronDown />
                                                    }
                                                </NavLink>
                                                <ul className="sub_menu">                                                
                                                    <li>
                                                        <NavLink to="/digital-marketing-services"><MdKeyboardDoubleArrowRight /> Digital Marketing</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/seo-services"><MdKeyboardDoubleArrowRight /> SEO Services</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/ppc-services"><MdKeyboardDoubleArrowRight /> PPC</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/social-media-marketing"><MdKeyboardDoubleArrowRight /> Social Media Marketing</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/facebook-ads"><MdKeyboardDoubleArrowRight /> Facebook Ads</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        }
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
                            icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
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