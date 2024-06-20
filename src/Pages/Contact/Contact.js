import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ContactBox from "../../Components/ContactBox/ContactBox";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import SuccessCounter from "../../Components/SuccessCounter/SuccessCounter";
import { Helmet } from "react-helmet";


function Contact(){

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
            icon:<FaInstagram  itter />,    
            link:'https://www.instagram.com/610weblab/'
        },
        {
            icon:<FaLinkedinIn />,    
            link:'https://www.linkedin.com/company/610-web-lab'
        },
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

            <div className="office_location_sec">
                <div className="container">
                    <h2 className="sec_title">610weblab Office</h2>
                    <div className="description">We are located at the heart of Tricity, The Fastest Growing IT Region of India. Mohali</div>
                    <div className="office_location_inner_sec">
                        <div className="office_address">
                            <div className="office_address_top">
                                <h3>Address</h3>
                                <h4>C-196/A, Times Square Building, 2nd Floor, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</h4>
                            </div>
                            <div className="office_address_bottom">
                                We're located in Mohali, With our Top-notch team members of 610weblab .
                            </div>
                        </div>
                        <div className="address_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4049135549194!2d76.68453477607457!3d30.70701528687417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe44572a7c7%3A0xfdbafc3b892f2686!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1718263768936!5m2!1sen!2sin" width="100%" height="370" style={{border:0,borderRadius:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <section className="lets_discuss_sec">
                <div className="container">
                    <div className="lets_discuss_content">
                        <div className="discuss_form">
                            <form id="discuss_form">
                                <p className="form_field">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" required />
                                </p>
                                <p className="form_field">
                                    <label htmlFor="email_address">Email Address</label>
                                    <input type="email" name="email_address" id="email_address" placeholder="support@gmail.com" required />
                                </p>
                                <p className="form_field">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="tel" name="phone_number" id="phone_number" placeholder="+000 (123) 456 88" required />
                                </p>
                                <p className="form_field select_field">
                                    <label htmlFor="requirment">Select Requirments</label>
                                    <select name="requirment" id="requirment" required>
                                        <option value="">Website customize</option>
                                        <option value="">Website Design</option>
                                        <option value="">Website Development</option>
                                    </select>
                                </p>
                                <p className="form_field fullwidth">
                                    <label htmlFor="message">Write Message</label>
                                    <textarea name="message" id="message" placeholder="Write Message" rows="4"></textarea>
                                </p>
                                <p className="form_field fullwidth">
                                <input type="submit" name="discuss_submit" id="discuss_submit" value="Send Message" />
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