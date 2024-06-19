import './workCulture.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

function WorkCulture(){
    return(
        <section className='work_culture_sec'>
            <div className='container'>
                <div className='work_culture_content'>
                    <h2 className='sec_title'>Establishing a working culture that Inspires</h2>
                    <div className='description'>
                    610weblab never let the spotlight shift from their employees who are the fuel behind this company. We encourage the growth of our employees by practicing innovative approaches that boost their morale. Above all, a balanced work-life culture is promoted inspiring freedom and creativity.
                    </div>
                    {/* <div className='work_culture_gallery'>
                        <div className='work_culture_img'>
                            <img src="images/culture-1.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-2.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-3.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-4.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-5.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-6.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-7.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-8.webp" alt='image' />
                        </div>
                        <div className='work_culture_img'>
                            <img src="images/culture-9.webp" alt='image' />
                        </div>
                    </div> */}
                    <div className='work_culture_gallery'>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 481: 2, 768: 3, 1025: 4}}>
                            <Masonry gutter='15px'>
                                <div className='work_culture_img'>
                                    <img src="images/culture-4.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-5.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-3.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-6.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-9.webp" alt='image' />
                                </div>
                                
                                <div className='work_culture_img'>
                                    <img src="images/culture-7.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-1.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-8.webp" alt='image' />
                                </div>
                                <div className='work_culture_img'>
                                    <img src="images/culture-2.webp" alt='image' />
                                </div>
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkCulture;