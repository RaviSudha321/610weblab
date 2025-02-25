import { useState } from 'react';
import Button from '../Button/Button';
import './homeBanner.css';
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

function HomeBanner(){

    const [formData, setFormData] = useState({});
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
            "name": formData.fullname || '',
            "email": formData.email_address || '',
            "phone": formData.phone_number || '',
            "service": formData.service || '',
            "message": formData.comment || '',
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
            setFormData({})
            
          } catch (error) {
            console.error('Error submitting form:', error);
            
        } finally {
            setIsLoading(false);
        }
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
                            icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                            />

                            <Button 
                            title="Chat With Us"
                            link="https://wa.me/+918427814610"
                            target="_blank"
                            icon={<FaWhatsapp />}
                            buttonClass="whatsapp"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;