import { useState } from 'react';
import './newsletter.css';
import { toast } from 'react-toastify';


function Newsletter(){

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://shopifyaid.com/wp-json/custom-forms/v1/submit-newsletter-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    "email": email,
                })
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
            setEmail('');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className='newsletter_sec'>
            <div className='container'>
                <div className='newsletter_inner'>
                    <div className='newsletter_content'>
                        <h2 className='title'>Newsletter Signup</h2>
                        <p className='description'>To get more every updates</p>
                    </div>
                    <div className='newsletter_form'>
                        <form id="newsletter_form" method='post' action="/" onSubmit={handleSubmit}>
                            <p className='email_field'>
                                <input type='email' name="email-address" id="email-address" placeholder='Enter Email Address' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </p>
                            <p className='submit_field'>
                                <button type="submit" name="newsletter-submit" id="newsletter-submit">
                                    {isLoading 
                                    ? <div className="loading"><div className="lds-dual-ring"></div></div>
                                    : <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.904342 8.70045C0.844215 8.86739 0.849211 9.09789 0.913426 9.25315C0.980729 9.41721 1.23544 9.67165 1.36672 9.71303C1.41924 9.72959 3.85981 10.0352 6.78551 10.3979L12.111 11.0553L12.9871 16.4522C13.4746 19.4215 13.8817 21.8959 13.9002 21.9487C13.9188 22.0015 14.0112 22.1207 14.1059 22.2131C14.3072 22.4097 14.4763 22.4591 14.7622 22.4142C14.9268 22.3898 14.9783 22.359 15.1398 22.1868L15.3267 21.9875L18.8272 11.5778C20.7546 5.85154 22.3381 1.10874 22.3509 1.02862C22.4136 0.580747 21.9104 0.0894695 21.4747 0.173222C21.3968 0.189763 16.8062 2.0201 11.2737 4.24423C2.15915 7.90635 1.19992 8.30054 1.07826 8.43634C1.00463 8.51488 0.926101 8.63492 0.904342 8.70045Z" fill="white"/>
                                        </svg>
                                    }
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;