import './singleBlog.css';
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading'

function SingleBlog(){

    const {postSlug} = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const commentCount = '';

    const getPost = async() => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/posts/?slug=${postSlug}&_embed`);
            if(!response.ok){
                console.log('Single post fetch error');
                setLoading(false);
            }
            const data = await response.json();
            setPost(data['0']);
            commentCount = post.comment_count || post._embedded?.replies?.length || 0;
            setLoading(false);
        }
        catch (error){
            console.log('single post', error);
            setLoading(false);
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    useEffect(()=>{
        getPost();
    },[postSlug]);

    if(loading){
        return <Loading />
    }

    return(
        <div className="single_blog_page">
            <PageBanner 
            title="Start, Build & Grow Your Business with 610weblab Blog"
            />
            { post &&
                <section className='blog_details_sec'>
                    <div className='container'> 
                        <div className='blog_details_inner'>
                            <div className='blog_summary'>
                                {
                                    post._embedded &&
                                    <div className='blog_img'>
                                        <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="image" />
                                    </div> 
                                }
                                
                                {post.title && <h2 className='sec_title blog_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>}
                                <div className='blog_meta'>
                                    <ul className='meta_items'>
                                        {
                                            post._embedded && 
                                            <li className='meta_item'>
                                                <span className='meta_icon'>
                                                    <img src={post._embedded['author']['0'].avatar_urls['48']} alt={post._embedded['author']['0'].name} className='author_img' />
                                                </span>
                                                <span className='meta_title'>{post._embedded['author']['0'].name}</span>
                                            </li>
                                        }
                                        <li className='meta_item'>
                                            <span className='meta_icon'>
                                                <img src="/images/calendar-meta.svg" alt="Post Date" style={{width: "23px"}} />
                                            </span>
                                            <span className='meta_title'>{formatDate(post.date_gmt)}</span>
                                        </li>
                                        <li className='meta_item'>
                                            <span className='meta_icon'>
                                                <img src="/images/comments.svg" alt="Post Comments" style={{width: "23px"}} />
                                            </span>
                                            {
                                                post._embedded && post._embedded['replies'] 
                                                ? <span className='meta_title'>Comments ({post._embedded['replies']['0'].length})</span>
                                                : <span className='meta_title'>Comments ({commentCount ? commentCount : 0})</span>
                                            }
                                        </li>
                                    </ul>
                                </div>
                                {
                                    post.content &&
                                    <div className='blog_description' dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
                                }
                                <div className='blog_comments_sec'>
                                    <h2 className='comment_area_title'>Leave a Message</h2>
                                    <p className='comment_area_desc'>Have any question? Ready to talk to us!</p>
                                    <div className='comment_form_outer'>
                                        <form id="comment_form" className='comment_form'>
                                            <p className='field_group name_field'>
                                                <input type='text' name="fullname" id="fullname" placeholder='Full Name' required />
                                            </p>
                                            <p className='field_group email_field'>
                                                <input type='email' name="email_address" id="email_address" placeholder='Email Address' required />
                                            </p>
                                            <p className='field_group comment_field'>
                                                <textarea name="comment" id="comment" placeholder='Write Message' rows="4"></textarea>
                                            </p>
                                            <p className='field_group terms_field'>
                                                <input type="checkbox" name="terms_conditions" id="terms_conditions" required />
                                                <label>I Agree with the trams & conditions</label>
                                            </p>
                                            <p className='field_group submit_btn'>
                                                <input type="submit" name="submit_comment" id="submit_comment" value="Send Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <BlogSidebar currentPost={post.id} />
                        </div>
                    </div>
                </section>
            }
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default SingleBlog;