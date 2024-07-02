import { useState } from 'react';
import Button from '../Button/Button';
import './homeBanner.css';
import emailjs from '@emailjs/browser';

function HomeBanner(){

    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // const emailBody = `
    //     <b>Name:</b> ${formData.fullname}
    //     <br/>
    //     <b>Email:</b> ${formData.email_address}
    //     <br/>
    //     <b>Phone:</b> ${formData.phone_number}
    //     <br/>
    //     <b>Service:</b> ${formData.service}
    //     <br/>
    //     <b>Comment:</b> ${formData.comment}
    // `;

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        // window.Email.send({
        //     SecureToken : "088229d7-e86c-4936-83c1-24d38a56c8af",
        //     To : 'ravisudha.610weblab@gmail.com',
        //     From : formData.email_address,
        //     Subject : "New Website Audit Enquiry",
        //     Body : emailBody
        // }).then(
        //   message => {
        //     setFormMessage(message)
        //     if(message=='OK'){
        //         console.log('Thanks for submitting details.We will contact you soon.');
        //         setFormData([]);
        //     }
        //     else{
        //         console.error(message);
        //     }  
        //   }
        // );

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
            (success) => {
                if(success.status == 200 & success.text == "OK"){
                    alert('form submitted');
                    setFormData([]);
                    setIsLoading(false);
                }
            },
            (error) => {
                console.log('FAILED...', error.text);
                setIsLoading(false);
            },
        );
    }

    return(
        <div className='home_banner_sec'>
            <div className='container'>
                <div className='home_banner_content'>
                    <div className='banner_left_col'>
                        <h1 className='home_banner_title'>Experience Innovation And <span>Expertise In Technology</span> With Our <span>Creative Experts.</span></h1>
                        <div className='home_banner_desc'>610 Web Lab is committed to providing web design & development solutions and delivering results within the demanding time as per the client’s requirements. We believe that our teamwork and relationship with our customers are the backbone of our work.</div>
                        <div className='home_banner_buttons'>
                            <Button 
                            title="Request A Quote"
                            link="/contact-us"
                            icon={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1409_192)">
                                <path d="M1.78448 0.0778599C0.943664 0.323954 0.279211 1.00071 0.0618284 1.83333C0.00850812 2.03841 0.000304994 3.17044 0.000304994 10.4917C0.000304994 19.8433 -0.0202028 19.1132 0.27511 19.7038C0.467883 20.0853 0.898547 20.52 1.2923 20.721C1.8378 21.004 1.8378 21.004 4.28234 20.9917C6.42335 20.9794 6.47667 20.9794 6.58741 20.8933C6.64894 20.8482 6.75968 20.7415 6.8253 20.6554C6.94425 20.5118 6.95245 20.4749 6.95245 20.1796C6.95245 19.8843 6.94425 19.8474 6.8253 19.7038C6.5464 19.3552 6.73507 19.3839 4.37667 19.3593C2.42843 19.3388 2.26847 19.3347 2.13312 19.2609C1.93214 19.1542 1.85011 19.0763 1.74757 18.8876L1.66144 18.7236V10.4999C1.66144 2.5429 1.66554 2.2722 1.73937 2.13274C1.84601 1.93177 1.92394 1.84974 2.11261 1.7472C2.27667 1.66106 2.28077 1.66106 6.06241 1.64876L9.84406 1.63645V3.0597C9.84406 4.6429 9.85636 4.74544 10.1189 5.26634C10.3116 5.64778 10.7423 6.08255 11.136 6.28352C11.6487 6.55013 11.7595 6.56243 13.3468 6.56243H14.7659V6.94798C14.7659 7.37864 14.8028 7.50989 14.9628 7.68626C15.295 8.03899 15.8775 8.03899 16.2097 7.68626C16.3901 7.48938 16.4066 7.39095 16.4066 6.41477C16.4066 5.65188 16.3943 5.47141 16.3409 5.36067C16.2548 5.18841 11.3575 0.274734 11.1196 0.118876L10.9351 -7.05719e-05L6.48487 0.00403214C2.36691 0.00403214 2.01007 0.0122356 1.78448 0.0778599ZM13.4452 4.9177C13.3919 4.92591 13.0761 4.9218 12.7357 4.9136C11.9564 4.8931 11.7882 4.81927 11.5831 4.42962C11.5216 4.31067 11.5052 4.16302 11.4929 3.56829L11.4765 2.85052L12.506 3.87591C13.3796 4.74134 13.5232 4.9054 13.4452 4.9177Z" fill="#30A9E0"/>
                                <path d="M3.6627 7.98164C3.4084 8.1334 3.28125 8.37129 3.28125 8.69531C3.28125 9.02344 3.4084 9.26133 3.6668 9.41309L3.84316 9.51562H8.20312H12.5631L12.7395 9.41309C12.9979 9.26133 13.125 9.02344 13.125 8.69531C13.125 8.36719 12.9979 8.1293 12.7395 7.97754L12.5631 7.875H8.19902H3.83496L3.6627 7.98164Z" fill="#30A9E0"/>
                                <path d="M17.4932 8.7321C17.3783 8.78543 16.1643 9.97898 13.5557 12.5958C9.39668 16.7671 9.56074 16.5907 9.24492 17.4274C9.09316 17.8294 8.6543 19.8966 8.6543 20.2083C8.6543 20.5077 8.88809 20.8522 9.15879 20.9548C9.37207 21.0368 9.7002 20.9999 10.7297 20.7948C12.1447 20.5077 12.4441 20.4052 13.0799 19.9868C13.3752 19.794 14.0109 19.1788 17.0953 16.1026C19.1092 14.0928 20.8072 12.3784 20.8688 12.2882C21.0205 12.0708 21.0451 11.6524 20.9262 11.4186C20.8072 11.1889 18.3955 8.79773 18.2027 8.7157C17.9977 8.63367 17.6941 8.63777 17.4932 8.7321ZM18.416 11.2587L18.9697 11.8124L15.6475 15.1346C13.8182 16.9639 12.2268 18.5266 12.1037 18.6087C11.8166 18.8014 11.5623 18.8958 11.025 19.0106C10.6846 19.0803 10.582 19.0927 10.582 19.0516C10.582 18.9204 10.7502 18.2067 10.824 18.0098C10.8732 17.8909 10.9758 17.6899 11.0578 17.5628C11.1563 17.4069 12.3375 16.1928 14.5113 14.0149C16.3324 12.1938 17.8295 10.705 17.8418 10.705C17.8541 10.705 18.1125 10.9552 18.416 11.2587Z" fill="#30A9E0"/>
                                <path d="M3.6627 11.2629C3.4084 11.4146 3.28125 11.6525 3.28125 11.9766C3.28125 12.3047 3.4084 12.5426 3.6668 12.6943L3.84316 12.7969L7.45664 12.7887L11.066 12.7764L11.226 12.6492C11.4311 12.4893 11.5664 12.2186 11.5664 11.9766C11.5623 11.6484 11.3408 11.3039 11.0619 11.2014C10.984 11.1686 9.80273 11.1563 7.39102 11.1563H3.83496L3.6627 11.2629Z" fill="#30A9E0"/>
                                <path d="M3.6627 14.5441C3.4084 14.6959 3.28125 14.9338 3.28125 15.2578C3.28125 15.5859 3.4084 15.8238 3.6668 15.9756L3.84316 16.0781H5.86523H7.8873L8.06367 15.9756C8.32207 15.8238 8.44922 15.5859 8.44922 15.2578C8.44922 14.9297 8.32207 14.6918 8.06367 14.54L7.8873 14.4375H5.86113H3.83496L3.6627 14.5441Z" fill="#30A9E0"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1409_192">
                                <rect width="21" height="21" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                }
                            />

                            <Button 
                            title="Chat With Us"
                            link="https://wa.me/+918427814610"
                            target="_blank"
                            icon={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1409_6)">
                                <path d="M9.24951 0.0451183C7.31357 0.278908 5.39814 1.08691 3.85596 2.32149C3.40889 2.68242 2.64189 3.44942 2.28096 3.89648C1.05049 5.43457 0.320409 7.16543 0.0579086 9.14649C-0.0323258 9.85195 -0.00361488 11.4311 0.11533 12.0586C0.328612 13.1742 0.644432 14.134 1.0915 15.0158C1.16943 15.1717 1.23096 15.3275 1.23096 15.3645C1.23096 15.426 0.0661117 20.7744 0.0168929 20.9262C0.000486689 20.9754 0.0168929 21 0.0620101 21C0.103026 21 1.39502 20.7129 2.93721 20.3602L5.74678 19.7244L6.26767 19.9459C7.22334 20.3561 8.19951 20.6268 9.229 20.7621C9.81553 20.84 11.3167 20.8277 11.9155 20.7375C14.2821 20.393 16.2837 19.3963 17.9448 17.7393C19.5608 16.1232 20.5698 14.1135 20.9062 11.833C21.0046 11.148 21.0046 9.64277 20.9062 8.98242C20.7216 7.77656 20.4058 6.79629 19.8685 5.73809C19.3435 4.7086 18.7364 3.88008 17.8669 3.01465C16.3329 1.48887 14.4626 0.520899 12.3052 0.135353C11.7843 0.0451183 11.5751 0.0287113 10.644 0.016407C10.0575 0.0123062 9.42998 0.0246105 9.24951 0.0451183ZM11.6899 1.74727C15.6644 2.26817 18.8718 5.58633 19.2778 9.59356C19.6511 13.3014 17.4731 16.9395 13.9827 18.4283C11.571 19.4578 8.85986 19.3799 6.53838 18.2068L6.00107 17.9361L4.12666 18.3627C3.09306 18.6006 2.24404 18.7852 2.23584 18.777C2.22763 18.7688 2.4081 17.9279 2.62959 16.9107L3.03974 15.0527L2.79365 14.6139C2.15791 13.4777 1.76006 12.157 1.68623 10.943C1.50986 7.98574 2.82236 5.19258 5.22998 3.4043C7.08389 2.02617 9.35615 1.44375 11.6899 1.74727Z" fill="#25D366"/>
                                <path d="M6.99375 5.82015C6.64512 5.91039 6.26367 6.29183 5.98887 6.81273C5.77559 7.21879 5.69355 7.58793 5.68945 8.10062C5.68945 8.89633 5.99297 9.65922 6.72305 10.6969C7.29316 11.5049 7.56387 11.833 8.13809 12.4073C9.15117 13.4203 9.96738 13.9371 11.2881 14.4129C12.3422 14.7903 13.0271 14.9092 13.6383 14.8149C14.2002 14.7246 14.959 14.2571 15.1969 13.8469C15.4266 13.4573 15.5455 12.5959 15.3937 12.4565C15.2953 12.3703 13.5275 11.5008 13.2773 11.4188C13.1707 11.3819 13.0354 11.3655 12.982 11.3778C12.9205 11.3942 12.7359 11.587 12.498 11.8864C11.973 12.5426 11.8828 12.6328 11.7516 12.6328C11.5916 12.6328 10.7508 12.2186 10.2873 11.911C9.61465 11.4639 8.93789 10.7666 8.4498 10.0284C8.09707 9.48695 8.09707 9.49926 8.51133 9.06449C8.79023 8.76918 8.98301 8.43695 8.98301 8.24418C8.98301 8.12113 8.22832 6.23851 8.10527 6.04574C7.98223 5.86117 7.84687 5.80785 7.46953 5.79554C7.27676 5.79144 7.06348 5.79965 6.99375 5.82015Z" fill="#25D366"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1409_6">
                                <rect width="21" height="21" rx="5" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                }
                            />
                        </div>
                    </div>
                    <div className='banner_right_col'>
                        <div className='banner_form'>
                            <h2 className='form_title'>Free Website Audit</h2>
                            <p className='form_desc'>Please provide the following information about you and get connected with us.</p>
                            <form id="website_audit_form" className='website_audit_form' onSubmit={handleSubmit}>
                                <p className='form_field name_field'>
                                    <label htmlFor='fullname'>Full Name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder='Enter Your Name' required value={formData.fullname || ''} onChange={handleChange} />
                                </p>
                                <p className='form_field email_field'>
                                    <label htmlFor='email_address'>Email Address</label>
                                    <input type="email" name="email_address" id="email_address" placeholder='Enter Your Email' required value={formData.email_address || ''} onChange={handleChange} />
                                </p>
                                <p className='form_field phone_field'>
                                    <label htmlFor='phone_number'>Phone Number</label>
                                    <input type="tel" name="phone_number" id="phone_number" placeholder='Enter Your Phone Number' required value={formData.phone_number || ''} onChange={handleChange} />
                                </p>
                                <p className='form_field select_field'>
                                    <label htmlFor='service'>Services are you looking for</label>
                                    <select name="service" id="service" required value={formData.service || ''} onChange={handleChange}>
                                        <option value="">Select Service</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="Web Development">Web Development</option>
                                    </select>
                                </p>
                                <p className='form_field comment_field'>
                                    <label htmlFor='comment'>Comment</label>
                                    <textarea name="comment" id="comment" placeholder='Hi there, I would like to ....' rows="4" required value={formData.comment || ''} onChange={handleChange}></textarea>
                                </p>
                                <p className='form_field submit_btn'>
                                    <input type="submit" name="website_audit_submit" id="website_audit_submit" />
                                    {isLoading && <div className="loading"><div className="lds-dual-ring"></div></div>}
                                </p>
                                <p className='form_field rating_img'>
                                    <img src="images/rating.webp" alt="image" />
                                </p>
                            </form>
                            {   
                                <>
                                {/* {isLoading ? <div className="loading"><div className="lds-dual-ring"></div></div> : '<div class="success_msg">Form Submission Successfully</div>'} */}
                               </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;