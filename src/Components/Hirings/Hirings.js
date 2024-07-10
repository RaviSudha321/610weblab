import { useEffect, useState } from 'react';
import HiringItem from '../HiringItem/HiringItem';
import './hirings.css';
import Loading from '../Loading/Loading';


function Hirings(){

    const [hirings, setHirings] = useState([]);
    const [hiringsCats, setHiringsCats] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getHirings = async()=>{
        try {
            const response = await fetch(process.env.REACT_APP_REST_API_URL+'/weblab-hiring?_embed');
            if(!response.ok){
                console.log('Fetch hiring error');
                setIsError(true);
                setIsLoading(false);
                return;
            }
            const data = await response.json();
            setHirings(data);
            setIsLoading(false);
        }
        catch (error){
            console.log('hiring catch error', error);
            setIsError(true);
            setIsLoading(false);
        }
    }

    const getHiringCats = async() => {
        try {
            const response = await fetch(process.env.REACT_APP_REST_API_URL+'/hiring-categories');
            if(!response.ok){
                console.log('Fetch hiring categories error');
                return;
            }
            const data = await response.json();
            setHiringsCats(data);
        }
        catch (error){
            console.log('hiring categories catch error', error);
        }
    }

    const handleCategory = (category) => {
        if(activeCategory != category){
            setActiveCategory(category);
        }
    }

    useEffect(()=>{
        getHirings();
        getHiringCats();
    },[])

    useEffect(()=>{

    },[activeCategory])

    return(
        <section className='hirings_sec'>
            <div className='container'>
                <h2 className='sec_title'>We are hiring value-based skills</h2>
                <div className='description'>610weblab is inviting talented and serious professionals from Developers to experts in Design, SEO, Testing, and more to be a part of the top-performing Software Development Company. Email us your updated Résumé/CV at support@610weblab.com. We are currently hiring for the below positions:</div>
                {
                    isLoading ?
                    <Loading /> :
                    hirings.length > 0 && !isError ?
                    <div className='hirings_content'>
                        {
                            hiringsCats.length > 0 &&
                            <div className='hirings_filter'>
                                <ul className='hiring_cats'>
                                    <li onClick={()=>handleCategory('all')} className={activeCategory == 'all' && 'active'}>All</li>   
                                    {
                                        hiringsCats.map((category, index)=>{
                                            return(
                                                <li 
                                                    className={activeCategory == category.slug && 'active'} 
                                                    key={index} 
                                                    onClick={()=>handleCategory(category.slug)}>
                                                    {category.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                
                        <div className='hirings_items'>
                            {
                                hirings.map((item, index)=>{
                                    return(
                                        <HiringItem item={item} key={index} activeCategory={activeCategory} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    : <p style={{textAlign:'center', marginTop:'50px', fontSize:'24px',color:'#f00'}}>Hiring is closed now.</p>
                }
                
            </div>
        </section>
    )
}

export default Hirings;