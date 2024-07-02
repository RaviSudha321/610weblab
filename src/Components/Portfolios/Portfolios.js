import { useEffect, useState } from 'react';
import PortfolioBox from '../PortfolioBox/PortfolioBox';
import './portfolios.css';


function Portfolios(){

    const [portfolios, setPortfolios] = useState([]);
    const [projectCats, setProjectCats] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [currentCat, setCurrentCat] = useState('all');

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

    const getProjectCats = async() => {
        try {
            const response = await fetch(process.env.REACT_APP_REST_API_URL+'/project-categories');
            if(!response.ok){
                throw new Error('Network response was not ok: portfolios');
            }
            const data = await response.json();
            setProjectCats(data);
        }
        catch (error) {
            console.log('portfolios categories:', error)
        }
    }

    const handleClick = (category) => {
        if(currentCat != category){
            setCurrentCat(category);
            console.log(category)
            const filteredProjects = portfolios.filter((item)=>{
                return item['project-categories'].includes(category);
            });
            setFilteredProjects(filteredProjects);
        }
    }

    useEffect(()=>{
        getPortfolios();
        getProjectCats();
    },[]);

    return(
        <section className='portfolios_sec'>
            <div className='container'>
                <div className='portfolio_content'>
                    <h3 className='sec_sub_title'>Pre-made Template</h3>
                    <h2 className='sec_title'>Let’s See Our Popular Website Template</h2>
                    {
                        projectCats.length > 0 &&
                        <div className='portfolios_filter'>
                            <ul className='portfolio_cats'>
                                <li className={currentCat == 'all' && 'active'} onClick={()=>handleClick('all')}>All</li>
                                {
                                    projectCats.map((category, index) => {
                                        return(
                                            <>
                                            {
                                                category.count > 0 &&
                                                <li className={currentCat == category.id && 'active'} key={index} onClick={()=>handleClick(category.id)}>{category.name}</li> 
                                            }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                    
                    {
                        portfolios.length > 0 &&
                        <div className='portfolio_boxes'>
                            {
                                filteredProjects.length > 0 
                                ?
                                    filteredProjects.map((item, index)=>{
                                        return (
                                            <PortfolioBox
                                                title={item.title.rendered}
                                                imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                                key={index}
                                                currentCat={currentCat}
                                                terms={item._embedded['wp:term']['0']}
                                            />
                                        )
                                    })
                                : 
                                portfolios.map((item, index)=>{
                                    return (
                                        <PortfolioBox
                                            title={item.title.rendered}
                                            imageUrl={item._embedded['wp:featuredmedia']['0'].source_url}
                                            key={index}
                                            currentCat={currentCat}
                                            terms={item._embedded['wp:term']['0']}
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