import PortfolioBox from '../PortfolioBox/PortfolioBox';
import './portfolios.css';


function Portfolios(){
    return(
        <section className='portfolios_sec'>
            <div className='container'>
                <div className='portfolio_content'>
                    <h3 className='sec_sub_title'>Pre-made Template</h3>
                    <h2 className='sec_title'>Let’s See Our Popular Website Template</h2>
                    <div className='portfolios_filter'>
                        <ul className='portfolio_cats'>
                            <li>All</li>
                            <li>JS Framework</li>
                            <li>Php Development</li>
                            <li>Shopify Development</li>
                            <li>Web Design</li>
                            <li>WHMCS</li>
                            <li>Wordpress Development</li>
                        </ul>
                    </div>
                    <div className='portfolio_boxes'>
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                        <PortfolioBox
                            title="Stretch Marks Web Template"
                            imageUrl="images/portfolio.webp"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolios;