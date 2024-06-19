import HiringItem from '../HiringItem/HiringItem';
import './hirings.css';


function Hirings(){
    return(
        <section className='hirings_sec'>
            <div className='container'>
                <h2 className='sec_title'>We are hiring value-based skills</h2>
                <div className='description'>610weblab is inviting talented and serious professionals from Developers to experts in Design, SEO, Testing, and more to be a part of the top-performing Software Development Company. Email us your updated Résumé/CV at support@610weblab.com. We are currently hiring for the below positions:</div>
                <div className='hirings_content'>
                    <div className='hirings_filter'>
                        <ul className='hiring_cats'>
                            <li>All</li>
                            <li>Laravel Developer</li>
                            <li>PHP Developer</li>
                            <li>Shopify Developer</li>
                            <li>Web Designer</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <div className='hirings_items'>
                        <HiringItem />
                        <HiringItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hirings;