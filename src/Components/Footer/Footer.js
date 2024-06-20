import { NavLink } from 'react-router-dom';
import './footer.css';
import Button from "../Button/Button";
import Newsletter from '../Newsletter/Newsletter';

function Footer(){
    return(
        <footer id="footer" className="footer_sec">
            <Newsletter />
            <div className="container">
                <div className="footer_content">
                    <div className="footer_col_one">
                        <div className="footer_logo">
                            <NavLink to="/"><img src="images/logo-white.webp" alt="logo" /></NavLink>
                        </div>
                        <p className="footer_desc">610 WebLab specializes in creating intuitive, SEO-friendly websites. Our dedicated team ensures your online presence is impactful and engaging.</p>
                        <div className="hire_sec">
                            <img src="images/upwork.webp" alt="upwork logo" />
                            <h3>Real Clients Real Work -</h3>
                            <Button 
                            title="HIRE US"
                            link="#"
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
                                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.30528 0.083353C5.71362 0.48752 3.50528 1.92085 2.04279 4.14585C1.50945 4.95835 1.02195 6.16251 0.817788 7.16668C0.259455 9.93751 0.955287 12.5042 3.03862 15.3333C4.00112 16.6417 5.43445 18.125 7.60528 20.0583C8.99278 21.2958 9.02611 21.3125 9.66778 21.3125C10.3094 21.3125 10.3428 21.2958 11.7303 20.0583C13.9011 18.125 15.3344 16.6417 16.2969 15.3333C17.8386 13.2375 18.6136 11.3 18.6969 9.33334C18.7803 7.24168 18.1344 5.21251 16.8219 3.47918C16.4719 3.02085 15.6053 2.16252 15.1261 1.80835C13.9719 0.945852 12.6761 0.379187 11.2719 0.120853C10.5886 -0.00831223 9.00528 -0.0291462 8.30528 0.083353ZM10.7678 1.35835C12.4761 1.62502 13.9386 2.36252 15.1428 3.56668C16.3053 4.72918 17.0511 6.18751 17.3136 7.80001C17.6428 9.83751 17.1386 11.7375 15.7053 13.8958C14.6511 15.4792 13.4428 16.7792 10.9553 19C9.99278 19.8625 9.76778 20.0417 9.66778 20.0417C9.56778 20.0417 9.34278 19.8625 8.38028 19C5.89278 16.7792 4.68445 15.4792 3.63028 13.8958C2.19695 11.7375 1.69279 9.83751 2.02195 7.80001C2.47195 5.02501 4.41362 2.69168 7.06361 1.73752C7.57195 1.55419 7.88861 1.47085 8.45945 1.37502C9.03861 1.27502 10.1844 1.26669 10.7678 1.35835Z" fill="white"/>
                                        <path d="M9.2917 4.71706C8.55003 4.77123 7.80004 5.07123 7.18337 5.55873C5.33754 7.02123 5.16254 9.80456 6.8167 11.4712C7.32504 11.9837 7.9667 12.3629 8.65003 12.5504C9.13337 12.6837 10.2084 12.6837 10.6917 12.5504C12.0167 12.1837 13.0709 11.1796 13.475 9.89206C13.9709 8.32539 13.45 6.5879 12.1917 5.58373C11.3292 4.90456 10.4167 4.62957 9.2917 4.71706ZM10.3167 6.06706C11.5459 6.35873 12.45 7.57956 12.3625 8.83373C12.3167 9.55039 12.0792 10.0546 11.55 10.5837C11.2959 10.8337 11.1125 10.9754 10.9209 11.0712C10.3959 11.3254 10.2792 11.3504 9.67087 11.3504C9.06253 11.3504 8.94587 11.3254 8.42087 11.0712C8.04587 10.8879 7.4917 10.3337 7.28754 9.93789C6.88337 9.15039 6.86254 8.32539 7.23337 7.5504C7.79587 6.36706 9.04587 5.7629 10.3167 6.06706Z" fill="white"/>
                                    </svg>
                                </span>
                                <span className='title'>
                                    <a href="#">C-196/A, Times Square Building, 3rd Floor, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</a>
                                </span>
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1347_1077)">
                                        <path d="M10.2026 0.0854912C10.1246 0.137444 10.0504 0.237639 10.0059 0.341546C9.94279 0.497405 9.93908 0.534514 9.9799 0.67553C10.0653 0.953851 10.2026 1.05033 10.6701 1.14682C13.0488 1.64037 15.0379 2.96147 16.4444 4.99135C17.1235 5.96733 17.5799 7.06948 17.8694 8.43139C17.9362 8.74682 18.0252 8.89155 18.2071 8.96576C18.4817 9.0808 18.7785 8.99174 18.927 8.75053C19.0197 8.59838 19.0197 8.48705 18.927 8.03061C18.3815 5.36616 16.7932 3.0394 14.4738 1.5142C13.4756 0.853656 12.3141 0.363811 11.108 0.0929136C10.5811 -0.0258369 10.3696 -0.0258369 10.2026 0.0854912Z" fill="white"/>
                                        <path d="M3.19181 1.1464C2.65373 1.29484 2.42365 1.47296 1.36603 2.5714C0.505094 3.46574 0.341813 3.6921 0.17111 4.2005C0.119157 4.35265 0.0597819 4.60128 0.0338054 4.75343C-0.0181478 5.08742 0.0115397 5.94093 0.0894694 6.36398C0.378923 7.93742 1.31408 9.95617 2.56095 11.704C4.17521 13.9677 6.15314 15.812 8.40197 17.1591C11.0998 18.7734 13.4637 19.3671 14.911 18.7882C15.3637 18.6064 15.6383 18.3837 16.5549 17.456C17.6979 16.2944 17.8315 16.0755 17.8315 15.3444C17.8278 14.9177 17.7572 14.6691 17.5309 14.3239C17.4567 14.2126 16.8035 13.5261 16.0725 12.7987C14.9035 11.6335 14.7217 11.4665 14.4916 11.3478C14.0686 11.1325 13.6567 11.0806 13.2299 11.1882C12.792 11.3032 12.6102 11.4368 11.7901 12.2458L11.0145 13.0066L10.6768 12.8247C9.00685 11.9304 6.83966 9.74093 6.06408 8.15265L5.96759 7.95597L6.66896 7.2546C7.0549 6.86496 7.44084 6.44562 7.52248 6.31945C7.73771 5.9966 7.83791 5.67375 7.83791 5.31378C7.83791 4.95753 7.78967 4.77199 7.61525 4.43429C7.50021 4.20421 7.3258 4.01867 6.12716 2.81632C4.65392 1.34308 4.54259 1.25031 4.04533 1.13527C3.73361 1.06105 3.4924 1.06476 3.19181 1.1464ZM3.97111 2.30421C4.04162 2.33761 4.67248 2.94249 5.37013 3.64386C6.53537 4.81281 6.63927 4.93156 6.69123 5.10226C6.80627 5.49933 6.68752 5.67375 5.65216 6.67199C4.82834 7.46613 4.76896 7.55519 4.79865 7.92257C4.81349 8.11554 4.85802 8.24542 5.04357 8.62394C5.53713 9.62218 6.26447 10.5759 7.40002 11.7077C8.36857 12.6763 9.33342 13.3999 10.3242 13.912C10.7918 14.1532 10.8512 14.1755 11.059 14.1755C11.2149 14.1755 11.3336 14.1495 11.4412 14.0976C11.5303 14.0493 11.9533 13.6671 12.4506 13.1773C13.1483 12.487 13.3338 12.3275 13.4563 12.2903C13.8533 12.1753 13.9127 12.2198 15.3526 13.6671C16.6328 14.9511 16.7367 15.0773 16.7367 15.363C16.7367 15.6228 16.6143 15.7898 15.8201 16.5987C14.974 17.4597 14.8738 17.5562 14.6141 17.686C13.935 18.0312 12.8069 17.931 11.4115 17.4003C9.09591 16.5171 6.60588 14.7544 4.84318 12.7542C3.67052 11.4183 2.82443 10.1788 2.15275 8.8132C1.11369 6.69796 0.857634 5.12082 1.40314 4.21164C1.51447 4.02609 3.13244 2.38956 3.28459 2.31164C3.52209 2.18175 3.7299 2.18175 3.97111 2.30421Z" fill="white"/>
                                        <path d="M10.205 3.45073C10.0417 3.49155 9.84503 3.70308 9.81163 3.87749C9.74854 4.22261 9.96378 4.4898 10.3757 4.56401C12.1532 4.89058 13.7192 6.2896 14.2796 8.0523C14.339 8.24526 14.4021 8.47905 14.4169 8.56812C14.4837 8.96519 14.6767 9.173 14.981 9.17671C15.3335 9.18042 15.5487 8.9689 15.5487 8.62007C15.5487 8.37515 15.3706 7.68862 15.1962 7.25444C14.4577 5.42866 12.836 4.00737 10.9583 3.54722C10.4833 3.43218 10.3608 3.41362 10.205 3.45073Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1347_1077">
                                                <rect width="19" height="19" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className='title'>
                                    <a href="#">+91 8427-8146-10</a>
                                </span>                                    
                            </div>
                            <div className="contact_icon_list_item">
                                <span className='icon'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.25686 2.94648C3.98557 3.13066 3.168 3.50351 2.35491 4.27616C1.6137 4.98144 1.14202 5.83046 0.917411 6.87265C0.836551 7.23202 0.832059 7.52851 0.832059 11.4996C0.832059 16.1939 0.823075 16.0232 1.12854 16.8633C1.62718 18.2289 2.75472 19.334 4.12932 19.8057C4.8885 20.0662 4.47073 20.0482 11.209 20.0662C15.3104 20.0797 17.543 20.0707 17.8125 20.0392C19.6813 19.8236 21.2401 18.6017 21.878 16.8543C22.1744 16.0367 22.17 16.1445 22.17 11.4996C22.17 7.62734 22.1655 7.26796 22.0891 6.8996C21.6578 4.78827 20.0002 3.23847 17.8799 2.96445C17.5699 2.92402 5.53089 2.91054 5.25686 2.94648ZM17.6553 4.36152C17.8619 4.38398 18.1944 4.46034 18.3875 4.52323C18.7514 4.64452 19.277 4.93202 19.3084 5.02636C19.3264 5.08476 14.2457 10.2103 13.6258 10.7584C12.9699 11.3379 12.3231 11.5894 11.501 11.5894C10.6789 11.5894 10.0321 11.3379 9.3762 10.7584C8.89554 10.3361 3.6846 5.09823 3.6846 5.03534C3.6846 4.95898 4.26858 4.64003 4.63694 4.51874C4.82561 4.45585 5.11761 4.38398 5.28831 4.36152C5.74202 4.30312 17.1881 4.30312 17.6553 4.36152ZM8.87757 12.1869C9.34475 12.5193 10.0366 12.8113 10.6699 12.9416C11.0428 13.018 12.0356 13.009 12.4219 12.9236C13.0643 12.7799 13.6168 12.5418 14.1289 12.1824C14.2547 12.0971 15.6877 10.691 17.3229 9.06483C20.2473 6.14491 20.2922 6.10448 20.3596 6.2078C20.4629 6.36952 20.6112 6.77831 20.6875 7.09726C20.7414 7.34433 20.7549 8.00468 20.7549 11.4996C20.7549 15.4033 20.7504 15.6279 20.6696 15.9693C20.3506 17.2855 19.3893 18.2334 18.0192 18.5883C17.7496 18.6601 17.1971 18.6646 11.501 18.6646C5.70159 18.6646 5.25686 18.6601 4.96936 18.5838C4.04847 18.3502 3.28479 17.8156 2.80862 17.0744C2.56155 16.6881 2.44026 16.4096 2.33245 15.9693C2.25159 15.6279 2.2471 15.4033 2.2471 11.5086C2.2471 6.958 2.23811 7.09276 2.54358 6.42343L2.70081 6.09101L5.67464 9.05585C7.30979 10.691 8.75179 12.0971 8.87757 12.1869Z" fill="white"/>
                                    </svg>
                                </span>
                                <span className='title'>
                                    <a href="#">support@610weblab.com</a>
                                </span>
                            </div>
                        </div>
                        <div className="social_links">
                            <h3 className="menu_title">We Are Social</h3>
                            <ul>
                                <li>
                                    <a href="https://twitter.com/610Weblab/" target="_blank">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1347_558)">
                                            <path d="M0.273957 0.0585938C0.293489 0.0878906 2.43704 3.21289 5.03958 6.99707C7.63724 10.7812 9.76614 13.8867 9.76614 13.8965C9.76614 13.9062 0.981965 24.1357 0.303254 24.9121C0.234895 24.9951 0.288606 25 1.34818 25H2.47122L6.62161 20.1709L10.7769 15.3467L14.0923 20.1709L17.4077 25H21.0845C24.0142 25 24.7564 24.9854 24.7222 24.9365C24.7027 24.9072 22.4956 21.6846 19.815 17.7832C17.1294 13.8818 14.9273 10.6641 14.9126 10.6299C14.8931 10.5713 16.0796 9.17969 22.3492 1.88965L23.98 0H22.857H21.7339L17.813 4.56055C15.6548 7.06543 13.8775 9.11133 13.8628 9.10156C13.8482 9.09668 12.4322 7.04102 10.7134 4.5459L7.59329 0H3.91654C1.07962 0 0.249543 0.0146484 0.273957 0.0585938ZM13.9409 12.29C18.023 18.1348 21.4458 23.0322 21.5484 23.1787L21.7339 23.4375H20.1079L18.482 23.4326L11.0601 12.8125C6.97806 6.96777 3.55521 2.07031 3.45267 1.92383L3.26224 1.66016H4.8931L6.51907 1.66504L13.9409 12.29Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1347_558">
                                                    <rect width="25" height="25" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/610weblab/" target="_blank">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1347_564)">
                                            <path d="M5.88301 0.0292969C5.8293 0.0439453 5.60958 0.0878906 5.39473 0.126953C3.09981 0.561523 1.11739 2.30957 0.350786 4.56543C0.00410652 5.58594 0.0236378 5.09766 0.0236378 12.5C0.0236378 18.75 0.0285206 19.1895 0.111528 19.5801C0.6877 22.2803 2.71895 24.3115 5.41915 24.8877C5.80977 24.9707 6.24922 24.9756 12.4992 24.9756C18.7492 24.9756 19.1887 24.9707 19.5793 24.8877C22.2795 24.3115 24.3107 22.2803 24.8869 19.5801C24.9699 19.1895 24.9748 18.75 24.9748 12.5C24.9748 6.25 24.9699 5.81055 24.8869 5.41992C24.3791 3.03223 22.6994 1.11816 20.4338 0.351562C19.4133 0.00488281 19.9846 0.0292969 12.6213 0.0195312C8.96895 0.0146484 5.93672 0.0195312 5.88301 0.0292969ZM19.5061 1.64551C20.8879 2.06055 21.9572 2.82715 22.6311 3.88184C23.1535 4.69727 23.4025 5.43945 23.4856 6.43066C23.549 7.19238 23.549 17.8076 23.4856 18.5693C23.4123 19.4434 23.2658 19.9512 22.8606 20.7178C22.177 22.0215 20.9318 22.9834 19.4475 23.3594C18.8566 23.5107 17.9777 23.5352 12.4992 23.5352C7.02071 23.5352 6.1418 23.5107 5.55098 23.3594C3.59786 22.8662 2.18672 21.4551 1.6252 19.4336C1.54219 19.1357 1.53731 18.7305 1.53731 12.5C1.53731 6.26953 1.54219 5.86426 1.6252 5.56641C2.13301 3.75 3.31954 2.42188 4.98946 1.80664C5.26778 1.70898 5.74629 1.58203 5.98067 1.54785C6.06368 1.53809 9.06172 1.52832 12.6457 1.5332C19.1252 1.54297 19.1643 1.54297 19.5061 1.64551Z" fill="white"/>
                                            <path d="M18.878 3.32029C18.0235 3.59373 17.4766 4.3408 17.4766 5.23924C17.4717 6.416 18.3408 7.28514 19.5176 7.28025C20.4258 7.28025 21.168 6.7285 21.4414 5.86424C21.9297 4.28709 20.4502 2.81736 18.878 3.32029ZM19.8545 4.90232C20.0449 5.09275 20.0742 5.31736 19.9375 5.51756C19.8057 5.70799 19.7178 5.75682 19.4981 5.7617C19.3369 5.7617 19.2637 5.7324 19.1465 5.61033C18.8145 5.2783 19.0488 4.73631 19.5225 4.73631C19.6446 4.73631 19.7324 4.78025 19.8545 4.90232Z" fill="white"/>
                                            <path d="M11.3755 5.73193C8.52881 6.24463 6.37549 8.31982 5.7749 11.1323C5.64795 11.7231 5.64795 13.2759 5.7749 13.8667C6.35596 16.5815 8.4165 18.6421 11.1313 19.2231C11.7222 19.3501 13.2749 19.3501 13.8657 19.2231C16.5806 18.6421 18.6411 16.5815 19.2222 13.8667C19.2905 13.5444 19.3101 13.2319 19.3101 12.4995C19.3101 11.4497 19.2563 11.0786 18.9829 10.2778C18.2114 8.01221 16.2925 6.30811 13.9146 5.78564C13.4165 5.67334 11.8784 5.64404 11.3755 5.73193ZM13.4604 7.25049C15.6333 7.66064 17.3374 9.36475 17.7476 11.5376C17.8403 12.0356 17.8403 12.9634 17.7476 13.4614C17.3374 15.6343 15.6333 17.3384 13.4604 17.7485C12.9624 17.8413 12.0347 17.8413 11.5366 17.7485C9.36377 17.3384 7.65967 15.6343 7.24951 13.4614C7.15674 12.9634 7.15674 12.0356 7.24951 11.5376C7.65967 9.37939 9.34912 7.68018 11.5024 7.25537C11.9663 7.1626 12.9819 7.1626 13.4604 7.25049Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1347_564">
                                                    <rect width="25" height="25" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.linkedin.com/company/610-web-lab" target="_blank">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.19727 0.582595C1.7627 0.724197 1.50879 0.875564 1.19141 1.19295C0.717773 1.66658 0.488281 2.21834 0.488281 2.8824C0.488281 3.86385 1.01074 4.69881 1.88965 5.11385C2.23633 5.27986 2.31445 5.29939 2.76855 5.31404C3.37891 5.33845 3.78906 5.23103 4.24316 4.9283C4.62402 4.67439 4.85352 4.40584 5.05859 3.98103C5.41504 3.24373 5.40527 2.50154 5.03906 1.75935C4.87793 1.4322 4.40918 0.953689 4.07227 0.773025C3.54492 0.489822 2.73926 0.406814 2.19727 0.582595Z" fill="white"/>
                                            <path d="M15.0166 6.81836C13.4785 7.03809 12.3945 7.66309 11.7256 8.72266L11.5742 8.95703V8.04395V7.13086H9.57227H7.57031V13.8203V20.5098H9.66992H11.7646L11.7793 16.5645C11.7988 12.7021 11.7988 12.6143 11.9014 12.248C12.209 11.1641 12.8047 10.6172 13.8105 10.5098C15.1143 10.3633 15.8955 10.9004 16.1982 12.1455C16.2715 12.4385 16.2812 12.9512 16.2959 16.4912L16.3154 20.5098H18.415H20.5146L20.4951 15.9541C20.4756 12.0088 20.4658 11.3398 20.3926 10.9443C20.1289 9.42578 19.626 8.40039 18.8301 7.75586C18.3076 7.33594 17.6729 7.0625 16.8623 6.91602C16.457 6.83789 15.29 6.7793 15.0166 6.81836Z" fill="white"/>
                                            <path d="M0.78125 13.8203V20.5098H2.88086H4.98047V13.8203V7.13086H2.88086H0.78125V13.8203Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/610weblab/" target="_blank">
                                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.20801 0.539062C5.17676 0.783203 3.75586 1.99414 3.27246 3.89355C3.11133 4.52832 3.05762 5.20215 3.05762 6.55469V7.7168H1.69043H0.318359L0.196289 7.83887L0.0742188 7.96094L0.0888672 9.79199C0.103516 11.4717 0.108398 11.6279 0.191406 11.7061C0.269531 11.7842 0.411133 11.7939 1.66602 11.8086L3.05762 11.8232L3.06738 16.0469L3.08203 20.2754L3.21875 20.3926L3.35547 20.5098H5.18164C6.44141 20.5098 7.04688 20.4902 7.12988 20.4561C7.19824 20.4219 7.27637 20.334 7.30566 20.251C7.33984 20.1533 7.35449 18.7275 7.35449 15.9639V11.8232L8.93164 11.8086C9.7959 11.7988 10.543 11.7744 10.5918 11.75C10.7822 11.6572 10.7969 11.5449 10.8115 10.0117C10.8311 8.24902 10.8115 7.94629 10.6504 7.78516L10.5332 7.66797H8.94141H7.34961L7.36426 6.33496C7.37891 5.03125 7.37891 5.00195 7.49609 4.81641C7.57422 4.69434 7.69141 4.5918 7.83789 4.52832C8.04297 4.43555 8.17969 4.42578 9.33203 4.40625C10.748 4.38672 10.7822 4.37695 10.8652 4.06934C10.9336 3.82031 10.9336 1.06152 10.8652 0.817383C10.7773 0.5 10.7041 0.490234 9.00488 0.495117C8.18945 0.5 7.38379 0.519531 7.20801 0.539062Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 8.33398V15.9805L4.01855 15.9561C8.2373 15.9365 8.43262 15.9268 9.35059 15.6973C10.7617 15.3457 11.8945 14.335 12.4023 12.9629C12.5977 12.4404 12.666 12.0156 12.6709 11.332C12.6709 10.4482 12.5146 9.80371 12.1436 9.16894C11.8359 8.64648 11.1426 8.06055 10.5762 7.8457L10.3467 7.75781L10.6543 7.57715C11.1279 7.30371 11.6357 6.77637 11.8408 6.34668C12.1045 5.78516 12.1729 5.44336 12.1777 4.69141C12.1826 3.87598 12.0898 3.42676 11.7871 2.80176C11.3574 1.9082 10.4443 1.19531 9.3457 0.907225C8.55957 0.697264 8.30566 0.687498 4.06738 0.687498H0V8.33398ZM7.91992 3.50488C8.12988 3.55859 8.38867 3.66113 8.49609 3.73437C9.03809 4.09082 9.21875 4.9209 8.93066 5.69238C8.76465 6.1416 8.33008 6.44433 7.61719 6.60547C7.49512 6.62988 6.43555 6.66406 5.26367 6.67871L3.125 6.70312V5.0332V3.36816L5.33691 3.38769C7.3584 3.40234 7.57324 3.41211 7.91992 3.50488ZM7.94922 9.34473C8.58887 9.51562 8.95996 9.78418 9.18457 10.2432C9.31641 10.502 9.3457 10.6338 9.36523 10.9707C9.42871 12.1768 8.8916 12.9385 7.81738 13.168C7.56836 13.2168 7.00195 13.2363 5.3125 13.2363H3.125V11.2295V9.22266L5.38574 9.24707C7.27051 9.26172 7.69043 9.28125 7.94922 9.34473Z" fill="white"/>
                                            <path d="M15.9688 2.34766V3.32422H19.2891H22.6094V2.34766V1.37109H19.2891H15.9688V2.34766Z" fill="white"/>
                                            <path d="M18.1833 4.42734C16.4548 4.71543 15.0436 5.71641 14.3112 7.17148C13.8132 8.15781 13.5837 9.55918 13.6764 11.0484C13.818 13.3629 14.6677 14.7301 16.5475 15.6725C17.0065 15.9068 17.6315 16.1217 18.1393 16.2193C18.6764 16.3268 20.4196 16.3121 20.947 16.1949C22.4216 15.8727 23.447 15.2135 24.2673 14.0514C24.5261 13.6852 24.78 13.1236 24.8337 12.8062L24.8679 12.6012H23.3249H21.7819L21.6257 12.8307C21.3083 13.3043 21.0202 13.5387 20.5417 13.7193C19.9509 13.9342 19.0085 13.9293 18.3884 13.7047C17.4264 13.358 16.8698 12.5914 16.7233 11.4098L16.6891 11.1363H20.8493H25.0143L24.985 10.0475C24.9557 8.86094 24.8971 8.49961 24.6139 7.71836C24.3552 7.01523 23.8034 6.16563 23.2858 5.68711C22.7438 5.18906 21.9675 4.77402 21.1667 4.56406C20.3561 4.34922 19.0036 4.28574 18.1833 4.42734ZM20.0876 6.92246C20.4489 7.01035 20.7077 7.14219 20.9958 7.3668C21.2546 7.57676 21.2936 7.6207 21.4889 7.91367C21.6354 8.1334 21.7966 8.60703 21.8454 8.94883L21.8698 9.13438H19.3307C17.197 9.13438 16.7966 9.12461 16.7966 9.06602C16.7966 8.94395 17.0016 8.33359 17.1237 8.08457C17.2897 7.76231 17.5876 7.40586 17.8561 7.2252C18.4128 6.83945 19.2917 6.72227 20.0876 6.92246Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;