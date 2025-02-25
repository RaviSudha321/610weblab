import { NavLink } from 'react-router-dom';
import './footer.css';
import Button from "../Button/Button";
import Newsletter from '../Newsletter/Newsletter';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa6";

function Footer(){

    const socialMedia = [
        {
            icon:<FaFacebookF />, 
            link:'https://www.facebook.com/610weblab/'
        },
        {
            icon:<FaXTwitter />,    
            link:'https://twitter.com/610Weblab/'
        },
        {
            icon:<FaInstagram />,    
            link:'https://www.instagram.com/610weblab/'
        },
        {
            icon:<FaLinkedinIn />,    
            link:'https://www.linkedin.com/company/610-web-lab'
        },
        {
            icon:<FaBehance />,
            link:'https://www.behance.net/6Xweblab'
        },
    ];

    return(
        <footer id="footer" className="footer_sec">
            <Newsletter />
            <div className="container">
                <div className="footer_content">
                    <div className="footer_col_one">
                        <div className="footer_logo">
                            <NavLink to="/"><img src="/images/logo-white.webp" alt="logo" /></NavLink>
                        </div>
                        <p className="footer_desc">610 WebLab specializes in creating intuitive, SEO-friendly websites. Our dedicated team ensures your online presence is impactful and engaging.</p>
                        <div className="hire_sec">
                            <img src="/images/upwork.webp" alt="upwork logo" />
                            <h3>Real Clients Real Work -</h3>
                            <Button 
                            title="HIRE US"
                            link="/contact-us"
                            />
                        </div>
                    </div>
                    <div className="footer_col_two">
                        <h3 className="menu_title">Quick Links</h3>
                        <ul className="footer_menu">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about-us">About us</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/careers">Careers</NavLink></li>
                            <li><NavLink to="/contact-us">Contact us</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer_col_three">
                        <h3 className="menu_title">IT Services</h3>
                        <ul className="footer_menu">
                            <li><NavLink to="/website-development">Website Development</NavLink></li>
                            <li><NavLink to="/wordpress-development">Wordpress Development</NavLink></li>
                            <li><NavLink to="/shopify-development">Shopify Development</NavLink></li>
                            <li><NavLink to="/php-development">PHP Development</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer_col_four">
                        <h3 className="menu_title">Contact Information</h3>
                        <div className="contact_icon_list">
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/location.svg" alt="Address" />
                                </span>
                                <span className='title'>
                                    <a href="https://maps.app.goo.gl/JK4FKqKiLP8nhJ6bA" target="_blank">C-196/A, Times Square Building, 3rd Floor, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</a>
                                </span>
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/phone.svg" alt="Phone" />
                                </span>
                                <span className='title'>
                                    <a href="tel:+918427814610">+91 8427-8146-10</a>
                                </span>                                    
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <img src="/images/envelope.svg" alt="Email" />
                                </span>
                                <span className='title'>
                                    <a href="mailto:support@610weblab.com">support@610weblab.com</a>
                                </span>
                            </div>
                        </div>
                        <div className="social_links">
                            <h3 className="menu_title">We Are Social</h3>
                            <ul>
                                {socialMedia.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <a href={item.link} target="_blank">
                                                {item.icon}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;