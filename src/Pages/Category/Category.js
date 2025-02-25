import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Loading from '../../Components/Loading/Loading'
import BlogBox from "../../Components/BlogBox/BlogBox";
import './category.css';

function Category(){

    const {categorySlug} = useParams();
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryPosts, setCategoryPosts] = useState([]);

    useEffect(()=>{
        if (!categorySlug) return;
        const fetchCategory = async () => {
            try{
                setLoading(true);
                const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/categories?slug=${categorySlug}`);
                if(!response.ok){
                    console.log('category not fetched');
                    return;
                }
                const data = await response.json();
                setCategory(data[0] || null);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCategory();
    }, [categorySlug]);

    useEffect( ()=>{
        if (!category?.id) return;
        const fetchCategoryPosts = async () => {
            try{
                setLoading(true);
                const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/posts?categories=${category.id}&_embed`);
                if(!response.ok){
                    console.log('category posts not fetched');
                    return;
                }
                const data = await response.json();
                setCategoryPosts(data);
            } catch (error) {
                console.log('category posts', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategoryPosts();
    }, [category?.id])

    if(loading){
        return <Loading />
    }

    return(
        <>
            <PageBanner
            title={category.name}
            />
            <section className="category_posts_sec">
                <div className="container">
                    <div className="blogs_grid_content">
                    {
                        categoryPosts.length > 0 ? 
                        <div className="blogs_grid">
                            {
                                categoryPosts.map((post, index)=>{
                                    return(
                                        <BlogBox
                                        key={index}
                                        blog={post}
                                        />
                                    )
                                })
                            }
                        </div>
                        : 'No Posts Found!'
                    }
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Category;