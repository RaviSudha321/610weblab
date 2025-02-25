import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa6";

import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ContactBox from "../../Components/ContactBox/ContactBox";
import SuccessCounter from "../../Components/SuccessCounter/SuccessCounter";
import OfficeLocation from "../../Components/OfficeLocation/OfficeLocation";


function Contact(){

    const [formData, setFormData] = useState({
        fullname: "",
        email_address: "",
        phone_number: "",
        service: "",
        comment: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);

        const newFormData = {
            name: formData.fullname || '',
            email: formData.email_address || '',
            phone: formData.phone_number || '',
            service: formData.service || '',
            message: formData.comment || '',
        }
        
        try {
            const response = await fetch('https://shopifyaid.com/wp-json/custom-forms/v1/submit-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify(newFormData)
            });
      
            if (!response.ok) {
                const data = await response.json();
                toast.error(data.message,{
                    theme: "colored",
                })
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            toast.success(data.message,{
                theme: "colored",
            })
            setFormData({
                fullname: "",
                email_address: "",
                phone_number: "",
                service: "",
                comment: ""
            })
            
        } catch (error) {
            console.error('Error submitting form:', error);
            
        } finally {
            setIsLoading(false);
        }
    }

    const socialMedia = [
        {icon:<FaFacebookF />, link:'https://www.facebook.com/610weblab/'},
        {icon:<FaXTwitter />,link:'https://twitter.com/610Weblab/'},
        {icon:<FaInstagram />,link:'https://www.instagram.com/610weblab/'},
        {icon:<FaLinkedinIn />,link:'https://www.linkedin.com/company/610-web-lab'},
        {icon:<FaBehance />,link:'https://www.behance.net/6Xweblab'},
    ];

    return(
        <div className="career_page">
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <PageBanner 
            title="Get in Touch"
            description='We help every type of Business to Grow the Audience "Online" with Organic and Paid methods.'
            />
            <section className="lets_talk_sec">
                <div className="container">
                    <h2 className="sec_title">
                        Let's 
                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4996 29H8.99961C10.4992 23.5001 9.99961 22.5 4.49961 18C-1.00039 13.5 0.999609 2.50004 10.4996 1.50004C19.9996 0.500043 20.4996 5.50004 21.4996 8.00004C22.4996 10.5 25.9996 11 25.9996 11.5C25.9996 11.9 24.6663 12.6667 23.9996 13C24.8329 13.5 26.1996 14.6 24.9996 15C23.4996 15.5 22.9996 17 22.4996 17.5C22.0996 17.9 24.3329 18.3334 25.4996 18.5C25.3329 18.6667 24.9996 19.1 24.9996 19.5C24.9996 20 26.4996 21.5 22.4996 22.5C19.2996 23.3 18.4996 27.1667 18.4996 29Z" fill="#30A9E0" stroke="#30A9E0"/>
                        </svg>
                        talk!
                    </h2>
                    <div className="description">Let's get Connected Today with our Team:</div>
                    <div className="contact_boxes">
                        <ContactBox
                        title="Phone Number"
                        link="tel:918427814610"
                        linkText="91 8427-8146-10"
                        description="Give us a call direclty, our Sales team will catch you and will get back to you."
                        />
                        <ContactBox
                        title="Email Address"
                        link="mailto:support@610weblab.com"
                        linkText="support@610weblab.com"
                        description="Send us a detailed message. Our Team will get back to you with the Details."
                        />
                        <ContactBox
                        title="Social Media"
                        description="Want to connect on Social Media! We're already here."
                        socialMedia={socialMedia}
                        />
                    </div>
                </div>
            </section>

            <OfficeLocation />

            <section className="lets_discuss_sec">
                <div className="container">
                    <div className="lets_discuss_content">
                        <div className="discuss_form">
                            <form id="discuss_form" onSubmit={handleSubmit}>
                                <p className="form_field">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" required value={formData.fullname || ''} onChange={handleChange} />
                                </p>
                                <p className="form_field">
                                    <label htmlFor="email_address">Email Address</label>
                                    <input type="email" name="email_address" id="email_address" placeholder="support@gmail.com" required value={formData.email_address || ''} onChange={handleChange} />
                                </p>
                                <p className="form_field">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="tel" name="phone_number" id="phone_number" placeholder="+000 (123) 456 88" required value={formData.phone_number || ''} onChange={handleChange} />
                                </p>
                                <p className="form_field select_field">
                                    <label htmlFor="service">Select Requirments</label>
                                    <select name="service" id="service" required value={formData.service || ''} onChange={handleChange} >
                                        <option value="">Website customize</option>
                                        <option value="website-design">Website Design</option>
                                        <option value="website-development">Website Development</option>
                                    </select>
                                </p>
                                <p className="form_field fullwidth">
                                    <label htmlFor="comment">Write Message</label>
                                    <textarea name="comment" id="comment" placeholder="Write Message" rows="4" required value={formData.comment || ''} onChange={handleChange} ></textarea>
                                </p>
                                <p className="form_field fullwidth">
                                    <input type="submit" name="discuss_submit" id="discuss_submit" value="Send Message" />
                                    {isLoading && <div className="loading"><div className="lds-dual-ring"></div></div>}
                                </p>
                            </form>
                        </div>
                        <div className="discuss_content">
                            <h2 className="sec_title">Let's discuss your next creative project.</h2>
                            <div className="description">
                                <svg width="55" height="60" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 19.4999L57.5 50.9999" stroke="#30A9E0" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M4 50.1984L58.5298 18.75" stroke="#30A9E0" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M30.25 65.9484L30.2798 2.99998" stroke="#30A9E0" stroke-width="5" stroke-linecap="round"/>
                                </svg>
                                <span>Have a question or want to learn more about our services? We'd love to hear from you! Reach out to us using the contact information below, or fill out the form to send us a message directly.</span>
                            </div>
                            <SuccessCounter />
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Contact;