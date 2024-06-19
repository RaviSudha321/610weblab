import { useState } from 'react';
import './faqs.css';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function Faqs(){

    const [activeItem, setActiveItem] = useState();

    const handleClick = (index) => {
        if(activeItem == index){
            setActiveItem();
        } else {
            setActiveItem(index);
        }
    }

    return(
        <section className='faqs_sec'>
            <div className='container'>
                <h2 className='sec_title'>FAQs</h2>
                <div className='faqs_list'>
                    <div className={`faq_item ${activeItem == 0 ? 'active' : ''}`} onClick={()=>handleClick(0)}>
                        <h4 className='question'>What exactly is Web Development? <span className='icon'>{activeItem == 0 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                    <div className={`faq_item ${activeItem == 1 ? 'active' : ''}`} onClick={()=>handleClick(1)}>
                        <h4 className='question'>How will a website benefit my business? <span className='icon'>{activeItem == 1 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                    <div className={`faq_item ${activeItem == 2 ? 'active' : ''}`} onClick={()=>handleClick(2)}>
                        <h4 className='question'>How Long Does Website Design & Development Take? <span className='icon'>{activeItem == 2 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                    <div className={`faq_item ${activeItem == 3 ? 'active' : ''}`} onClick={()=>handleClick(3)}>
                        <h4 className='question'>Will you maintain my site for me? <span className='icon'>{activeItem == 3 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                    <div className={`faq_item ${activeItem == 4 ? 'active' : ''}`} onClick={()=>handleClick(4)}>
                        <h4 className='question'>Will my website be mobile-friendly? <span className='icon'>{activeItem == 4 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                    <div className={`faq_item ${activeItem == 5 ? 'active' : ''}`} onClick={()=>handleClick(5)}>
                        <h4 className='question'>Do you provide SEO-friendly websites? <span className='icon'>{activeItem == 5 ? <FaMinus /> : <FaPlus />}</span></h4>
                        <div className='answer'>
                        Web development is the process of creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;