import { useState } from 'react';
import Button from '../Button/Button';
import './technologiesTabs.css';


function TechnologiesTabs(){

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    }

    return(
        <section className='technologies_tabs_sec'>
            <div className='container'>
                <div className='tt_header'>
                    <h2 className='sec_title'>Cutting-Edge Technologies <br/>That We Use For Robust Solutions</h2>
                    <Button 
                    title="Request A Quote"
                    link="/contact-us"
                    icon={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.78448 0.0779209C0.943664 0.324015 0.279211 1.00077 0.0618284 1.83339C0.00850812 2.03847 0.000304994 3.1705 0.000304994 10.4918C0.000304994 19.8433 -0.0202028 19.1133 0.27511 19.7039C0.467883 20.0853 0.898547 20.5201 1.2923 20.7211C1.8378 21.0041 1.8378 21.0041 4.28234 20.9918C6.42335 20.9795 6.47667 20.9795 6.58741 20.8933C6.64894 20.8482 6.75968 20.7416 6.8253 20.6555C6.94425 20.5119 6.95245 20.475 6.95245 20.1797C6.95245 19.8844 6.94425 19.8475 6.8253 19.7039C6.5464 19.3553 6.73507 19.384 4.37667 19.3594C2.42843 19.3389 2.26847 19.3348 2.13312 19.2609C1.93214 19.1543 1.85011 19.0764 1.74757 18.8877L1.66144 18.7236V10.5C1.66144 2.54296 1.66554 2.27226 1.73937 2.1328C1.84601 1.93183 1.92394 1.8498 2.11261 1.74726C2.27667 1.66112 2.28077 1.66112 6.06241 1.64882L9.84406 1.63651V3.05976C9.84406 4.64296 9.85636 4.7455 10.1189 5.2664C10.3116 5.64784 10.7423 6.08261 11.136 6.28358C11.6487 6.55019 11.7595 6.56249 13.3468 6.56249H14.7659V6.94804C14.7659 7.3787 14.8028 7.50995 14.9628 7.68632C15.295 8.03905 15.8775 8.03905 16.2097 7.68632C16.3901 7.48944 16.4066 7.39101 16.4066 6.41483C16.4066 5.65194 16.3943 5.47148 16.3409 5.36073C16.2548 5.18847 11.3575 0.274796 11.1196 0.118937L10.9351 -9.53674e-06L6.48487 0.00409317C2.36691 0.00409317 2.01007 0.0122967 1.78448 0.0779209ZM13.4452 4.91776C13.3919 4.92597 13.0761 4.92187 12.7357 4.91366C11.9564 4.89316 11.7882 4.81933 11.5831 4.42968C11.5216 4.31073 11.5052 4.16308 11.4929 3.56835L11.4765 2.85058L12.506 3.87597C13.3796 4.7414 13.5232 4.90546 13.4452 4.91776Z" fill="#30A9E0"/>
                        <path d="M3.6627 7.98164C3.4084 8.1334 3.28125 8.37129 3.28125 8.69531C3.28125 9.02344 3.4084 9.26133 3.6668 9.41309L3.84316 9.51562H8.20312H12.5631L12.7395 9.41309C12.9979 9.26133 13.125 9.02344 13.125 8.69531C13.125 8.36719 12.9979 8.1293 12.7395 7.97754L12.5631 7.875H8.19902H3.83496L3.6627 7.98164Z" fill="#30A9E0"/>
                        <path d="M17.4932 8.73223C17.3783 8.78555 16.1643 9.9791 13.5557 12.5959C9.39668 16.7672 9.56074 16.5908 9.24492 17.4275C9.09316 17.8295 8.6543 19.8967 8.6543 20.2084C8.6543 20.5078 8.88809 20.8523 9.15879 20.9549C9.37207 21.0369 9.7002 21 10.7297 20.7949C12.1447 20.5078 12.4441 20.4053 13.0799 19.9869C13.3752 19.7941 14.0109 19.1789 17.0953 16.1027C19.1092 14.093 20.8072 12.3785 20.8688 12.2883C21.0205 12.0709 21.0451 11.6525 20.9262 11.4187C20.8072 11.1891 18.3955 8.79785 18.2027 8.71582C17.9977 8.63379 17.6941 8.63789 17.4932 8.73223ZM18.416 11.2588L18.9697 11.8125L15.6475 15.1348C13.8182 16.9641 12.2268 18.5268 12.1037 18.6088C11.8166 18.8016 11.5623 18.8959 11.025 19.0107C10.6846 19.0805 10.582 19.0928 10.582 19.0518C10.582 18.9205 10.7502 18.2068 10.824 18.01C10.8732 17.891 10.9758 17.69 11.0578 17.5629C11.1563 17.407 12.3375 16.193 14.5113 14.015C16.3324 12.1939 17.8295 10.7051 17.8418 10.7051C17.8541 10.7051 18.1125 10.9553 18.416 11.2588Z" fill="#30A9E0"/>
                        <path d="M3.6627 11.2629C3.4084 11.4146 3.28125 11.6525 3.28125 11.9766C3.28125 12.3047 3.4084 12.5426 3.6668 12.6943L3.84316 12.7969L7.45664 12.7887L11.066 12.7764L11.226 12.6492C11.4311 12.4893 11.5664 12.2186 11.5664 11.9766C11.5623 11.6484 11.3408 11.3039 11.0619 11.2014C10.984 11.1686 9.80273 11.1563 7.39102 11.1563H3.83496L3.6627 11.2629Z" fill="#30A9E0"/>
                        <path d="M3.6627 14.5441C3.4084 14.6959 3.28125 14.9338 3.28125 15.2578C3.28125 15.5859 3.4084 15.8238 3.6668 15.9756L3.84316 16.0781H5.86523H7.8873L8.06367 15.9756C8.32207 15.8238 8.44922 15.5859 8.44922 15.2578C8.44922 14.9297 8.32207 14.6918 8.06367 14.54L7.8873 14.4375H5.86113H3.83496L3.6627 14.5441Z" fill="#30A9E0"/>
                        </svg>
                        }
                    />
                </div>
                <div className='technologies_tabs'>
                    <div className='technology_tabs_titles'>
                        <div className='tt_title' onClick={()=>handleClick(0)}>Web Development</div>
                        <div className='tt_title' onClick={()=>handleClick(1)}>Digital Marketing</div>
                        <div className='tt_title' onClick={()=>handleClick(2)}>Graphic Design</div>
                        <div className='tt_title' onClick={()=>handleClick(3)}>Mobile App</div>
                    </div>
                    <div className='technology_tabs_contents'> 
                        <div className={`tt_content ${activeTab == 0 ? 'active' : ''}`}>
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
                            <div className='technology_logos'>
                            <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/shopify.webp" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 1 ? 'active' : ''}`}>
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
                            <div className='technology_logos'>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/html.webp" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 2 ? 'active' : ''}`}>
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
                            <div className='technology_logos'>
                            <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/php.webp" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`tt_content ${activeTab == 3 ? 'active' : ''}`}>
                            <p className='description'>In web development, front-end technologies attract users with visually appealing interfaces, while back-end technologies ensure smooth data interaction. Without captivating visuals, user engagement diminishes. Back-end tools, frameworks, and databases manage server-side operations, facilitating communication with the front end.</p>
                            <div className='technology_logos'>
                            <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                                <div className='technology_img'>
                                    <img src="images/react.webp" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologiesTabs;