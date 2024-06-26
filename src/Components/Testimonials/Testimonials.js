import './testimonials.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';

function Testimonials(){

    const [testimonials, setTestimonials] = useState([]);

    const getTestimonials = async() => {
        try{
            const response = await fetch(process.env.REACT_APP_REST_API_URL+'/weblab-testimonials?_embed&order=asc');
            if(!response.ok){
                throw new Error('Network response was not ok: testimonials');
            }
            const data = await response.json();
            setTestimonials(data);
        }
        catch (error){
            console.log('testimonials error', error);
        }
    }

    useState(()=>{
        getTestimonials();
    },[])

    const options = {
        loop: true,
        margin: 16,
        dots: false,
        nav: true,
        navText: [
          '<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2021 0.0900002C12.49 0.21796 12.8355 0.601841 12.9187 0.889753C13.0658 1.3824 12.9763 1.93903 12.6884 2.26533C12.6308 2.32931 10.6986 3.99919 8.40169 5.96338C6.11121 7.93396 4.23019 9.55906 4.23659 9.58465C4.23659 9.61024 6.15599 11.2673 8.50406 13.2763C13.149 17.2495 13.0594 17.1535 13.0594 17.8189C13.0594 18.2604 12.8163 18.7402 12.4708 18.9769C12.1509 19.2009 11.4983 19.2648 11.1336 19.1113C11.0057 19.0601 8.67681 17.1151 5.95126 14.7862C0.512944 10.1349 0.647303 10.2692 0.647303 9.57186C0.647303 8.90006 0.500149 9.04722 5.82969 4.46624C8.52326 2.15016 10.8393 0.205166 10.9865 0.128389C11.2872 -0.0251637 11.895 -0.0443573 12.2021 0.0900002Z" fill="#2D3748"/></svg>',
          '<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.79789 0.0900002C1.50998 0.21796 1.16448 0.601841 1.08131 0.889753C0.934155 1.3824 1.02373 1.93903 1.31164 2.26533C1.36922 2.32931 3.30142 3.99919 5.59831 5.96338C7.88879 7.93396 9.76981 9.55906 9.76341 9.58465C9.76341 9.61024 7.84401 11.2673 5.49594 13.2763C0.850981 17.2495 0.940553 17.1535 0.940553 17.8189C0.940553 18.2604 1.18368 18.7402 1.52917 18.9769C1.84907 19.2009 2.50167 19.2648 2.86636 19.1113C2.99432 19.0601 5.32319 17.1151 8.04874 14.7862C13.4871 10.1349 13.3527 10.2692 13.3527 9.57186C13.3527 8.90006 13.4999 9.04722 8.17031 4.46624C5.47674 2.15016 3.16066 0.205166 3.01351 0.128389C2.7128 -0.0251637 2.10499 -0.0443573 1.79789 0.0900002Z" fill="#2D3748"/></svg>'
        ],
        items: 1,
        smartSpeed: 2000
    }


    return(
        <section className='testimonials_sec'>
            <div className='marquee'>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" stroke-width="2" stroke-linejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" stroke-width="2" stroke-linejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" stroke-width="2" stroke-linejoin="round"/></svg></span>
                <span>Client’s Testimonial <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.5L1 22.5L7 32.5L16 24.5L13.5 35.5H24.5L23 24.5L31 32.5L36.5 22L26 18.5L37 14.5L31 4.5L22 13.5L24.5 1H13.5L16 13.5L7 4.5L1 14.5L12 18.5Z" fill="#30A9E0" stroke="#0D328D" stroke-width="2" stroke-linejoin="round"/></svg></span>
            </div>
            <div className='testimonials_inner_sec'>
                <div className='container'>
                    <div className='testimonials'>
                        {
                            testimonials.length > 0 &&
                            <OwlCarousel className="testimonials_carousel"  {...options}>
                                {
                                    testimonials.map((item,index)=>{
                                        return(
                                            <div className='testimonial_item' key={index}>
                                                <div className='testimonial_img'>
                                                    {item._embedded 
                                                        ? <img src={item._embedded['wp:featuredmedia']['0'].source_url} alt={item.title.rendered} />
                                                        : <img src="https://placehold.co/340x360?text=610+Web+Lab" alt={item.title.rendered} />
                                                    }
                                                </div>
                                                <div className='testimonial_content'>
                                                    {
                                                        item.acf.stars > 1 &&
                                                        <span className='rating'>
                                                            {[...Array(item.acf.stars)].map((x, i) =>
                                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
                                                                    <path d="M7.54933 0.927051C7.84869 0.0057404 9.1521 0.0057404 9.45145 0.927051L10.768 4.97893C10.9019 5.39095 11.2858 5.66991 11.719 5.66991H15.9794C16.9482 5.66991 17.3509 6.90953 16.5672 7.47893L13.1205 9.98313C12.77 10.2378 12.6233 10.6891 12.7572 11.1012L14.0738 15.153C14.3731 16.0743 13.3186 16.8405 12.5349 16.2711L9.08818 13.7669C8.73769 13.5122 8.26309 13.5122 7.91261 13.7669L4.46587 16.2711C3.68216 16.8405 2.62768 16.0743 2.92703 15.153L4.24357 11.1012C4.37744 10.6891 4.23078 10.2378 3.88029 9.98313L0.433562 7.47893C-0.350152 6.90953 0.052624 5.66991 1.02135 5.66991H5.28174C5.71497 5.66991 6.09893 5.39095 6.2328 4.97893L7.54933 0.927051Z" fill="#FEAD18"/>
                                                                </svg>
                                                            )}
                                                        </span>
                                                    }
                                                    <h3 className='testimonial_title'>{item.title.rendered}</h3>
                                                    <p className='designation'>{item.acf.designation}</p>
                                                    <div className='testimonial_desc' dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;