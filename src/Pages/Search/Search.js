import './search.css';
import { useParams } from "react-router-dom";
import BlogBox from "../../Components/BlogBox/BlogBox";
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Loading from '../../Components/Loading/Loading';

function Search(){

    const {keyword} = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getPosts = async () => {
            if (!keyword) return;
            try {
                setLoading(true);
                const response = await fetch(process.env.REACT_APP_REST_API_URL+'/posts?search='+keyword+'&_embed');
                if(!response.ok){
                    console.log('search api not working');
                    return;
                }
                const data = await response.json();
                setSearchResults(data);
            }
            catch (error) {
                console.log('search error', error);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    },[keyword]);

    if(loading){
        return <Loading />
    }

    return(
        <div className="search_result_page">
            <Helmet>
                <title>Search Result Page</title>
            </Helmet>
            <PageBanner
            title={`Search Result For: ${keyword}`}
            />
            {
                searchResults.length > 0 &&
                <section className="search_results">
                    <div className="container">
                        <div className="blogs_grid">
                            {
                                searchResults.map((post, index)=>{
                                    return(
                                        <BlogBox blog={post} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }
            
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Search;