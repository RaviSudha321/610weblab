import { useEffect, useState } from 'react';
import PortfolioBox from '../PortfolioBox/PortfolioBox';
import './portfolios.css';


function Portfolios(){

    const [portfolios, setPortfolios] = useState([]);

    const getPortfolios = async()=>{
        try {
            const response = await fetch(process.env.REACT_APP_REST_API_URL+'/weblab-projects?order=asc&_embed');
            if(!response.ok){
                throw new Error('Network response was not ok: portfolios');
            }
            const data = await response.json();
            setPortfolios(data);
        }
        catch (error){
            console.log('portfolios error:', error)
        }
    }

    useEffect(()=>{
        getPortfolios();
    },[]);

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
                    {
                        portfolios.length > 0 &&
                        <div className='portfolio_boxes'>
                            {
                                portfolios.map((item, index)=>{
                                    return (
                                        <PortfolioBox
                                            title={item.title.rendered}
                                            imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolios;