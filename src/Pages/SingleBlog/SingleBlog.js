import './singleBlog.css';
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SingleBlog(){

    const {postSlug} = useParams();
    const [post, setPost] = useState([]);

    const getPost = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/posts/?slug=${postSlug}&_embed`);
            if(!response.ok){
                console.log('Single post fetch error')
            }
            const data = await response.json();
            setPost(data['0'])
        }
        catch (error){
            console.log('single post', error);
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    useEffect(()=>{
        getPost();
    },[postSlug])

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
                                                    <img src={post._embedded['author']['0'].avatar_urls['48']} alt={post._embedded['author']['0'].name} />
                                                </span>
                                                <span className='meta_title'>{post._embedded['author']['0'].name}</span>
                                            </li>
                                        }
                                        <li className='meta_item'>
                                            <span className='meta_icon'>
                                                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.47064 0.925985C6.13646 1.12989 6.06283 1.32813 6.06283 2.01349V2.6252H5.17357C4.62416 2.6252 4.13138 2.65919 3.90482 2.7045C3.03255 2.89142 2.18861 3.37852 1.54857 4.05821C0.817905 4.83985 0.444077 5.74044 0.347788 6.92989C0.211851 8.63478 0.160874 11.1213 0.189194 14.5934C0.223179 18.6432 0.319468 20.6143 0.512046 21.3166C0.942515 22.8459 2.21693 24.1033 3.7349 24.4941C4.6638 24.732 8.06224 24.851 12.6501 24.8113C16.632 24.7717 18.5521 24.6811 19.2827 24.4941C20.7951 24.0977 22.0978 22.7893 22.4943 21.2656C22.6812 20.5463 22.7718 18.6035 22.8115 14.6613C22.8398 11.1836 22.7945 8.71407 22.6529 6.95821C22.5566 5.74044 22.1884 4.85118 21.4521 4.05821C20.812 3.37852 19.9681 2.89142 19.0958 2.7045C18.8693 2.65919 18.3765 2.6252 17.8327 2.6252H16.9378V2.01349C16.9378 1.32813 16.8642 1.12989 16.53 0.925985C16.2751 0.773056 15.788 0.773056 15.5331 0.925985C15.199 1.12989 15.1253 1.32813 15.1253 2.01349V2.6252H11.5003H7.87533V2.01349C7.87533 1.50938 7.85833 1.37911 7.76205 1.22052C7.59212 0.948641 7.33724 0.812704 6.96908 0.812704C6.75951 0.812704 6.59525 0.846687 6.47064 0.925985ZM6.06283 5.04376C6.06283 5.73478 6.13646 5.93302 6.47064 6.13692C6.72552 6.28985 7.21263 6.28985 7.46751 6.13692C7.80169 5.93302 7.87533 5.73478 7.87533 5.04376V4.4377H11.5003H15.1253V5.04376C15.1253 5.55352 15.1423 5.6838 15.2386 5.84239C15.4085 6.11427 15.6634 6.2502 16.0316 6.2502C16.3997 6.2502 16.6546 6.11427 16.8245 5.84239C16.9208 5.6838 16.9378 5.55352 16.9378 5.0381V4.42071L17.7478 4.4547C18.9316 4.50001 19.5433 4.74356 20.104 5.37794C20.5742 5.91603 20.7611 6.44278 20.8177 7.42266L20.8517 8.0627H11.5003H2.14896L2.18294 7.42266C2.23958 6.44278 2.4265 5.91603 2.89662 5.37794C3.03255 5.22501 3.27044 5.0211 3.42904 4.91915C3.99544 4.55665 4.43158 4.46036 5.48509 4.44337L6.06283 4.4377V5.04376ZM20.931 10.2434C20.9933 10.7871 20.9253 17.7596 20.8517 19.1076C20.812 19.7477 20.7441 20.45 20.6988 20.6709C20.4949 21.6565 19.6566 22.4947 18.671 22.6986C17.0058 23.0498 5.99486 23.0498 4.32962 22.6986C3.34408 22.4947 2.5058 21.6565 2.30189 20.6709C2.25658 20.45 2.18861 19.759 2.14896 19.1359C2.07533 17.8219 2.00736 10.7928 2.06966 10.2434L2.10931 9.8752H11.5003H20.8913L20.931 10.2434Z" fill="#30A9E0"/>
                                                    <path d="M6.37402 12.7014C5.88125 12.9279 5.60938 13.3811 5.60938 13.9645C5.61504 14.7688 6.15879 15.3125 6.96875 15.3125C7.78438 15.3125 8.32812 14.7688 8.32812 13.9531C8.32812 13.3641 8.02793 12.8939 7.52383 12.6844C7.2293 12.5598 6.65723 12.5711 6.37402 12.7014Z" fill="#30A9E0"/>
                                                    <path d="M10.9053 12.7014C10.4125 12.9279 10.1406 13.3811 10.1406 13.9645C10.1463 14.7688 10.69 15.3125 11.5 15.3125C12.3156 15.3125 12.8594 14.7688 12.8594 13.9531C12.8594 13.3641 12.5592 12.8939 12.0551 12.6844C11.7605 12.5598 11.1885 12.5711 10.9053 12.7014Z" fill="#30A9E0"/>
                                                    <path d="M15.4365 12.7014C14.9438 12.9279 14.6719 13.3811 14.6719 13.9645C14.6775 14.7688 15.2213 15.3125 16.0312 15.3125C16.8469 15.3125 17.3906 14.7688 17.3906 13.9531C17.3906 13.3641 17.0904 12.8939 16.5863 12.6844C16.2918 12.5598 15.7197 12.5711 15.4365 12.7014Z" fill="#30A9E0"/>
                                                    <path d="M6.37402 17.2326C5.88125 17.4592 5.60938 17.9123 5.60938 18.4957C5.61504 19.3 6.15879 19.8438 6.96875 19.8438C7.78438 19.8438 8.32812 19.3 8.32812 18.4844C8.32812 17.8953 8.02793 17.4252 7.52383 17.2156C7.2293 17.091 6.65723 17.1023 6.37402 17.2326Z" fill="#30A9E0"/>
                                                    <path d="M10.9053 17.2326C10.4125 17.4592 10.1406 17.9123 10.1406 18.4957C10.1463 19.3 10.69 19.8438 11.5 19.8438C12.3156 19.8438 12.8594 19.3 12.8594 18.4844C12.8594 17.8953 12.5592 17.4252 12.0551 17.2156C11.7605 17.091 11.1885 17.1023 10.9053 17.2326Z" fill="#30A9E0"/>
                                                    <path d="M15.4365 17.2326C14.9438 17.4592 14.6719 17.9123 14.6719 18.4957C14.6775 19.3 15.2213 19.8438 16.0312 19.8438C16.8469 19.8438 17.3906 19.3 17.3906 18.4844C17.3906 17.8953 17.0904 17.4252 16.5863 17.2156C16.2918 17.091 15.7197 17.1023 15.4365 17.2326Z" fill="#30A9E0"/>
                                                </svg>
                                            </span>
                                            <span className='meta_title'>{formatDate(post.date_gmt)}</span>
                                        </li>
                                        <li className='meta_item'>
                                            <span className='meta_icon'>
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.0845 0.45507C8.19272 0.715618 6.31792 1.48027 4.81694 2.60175C4.29019 2.99257 3.32729 3.92148 2.89116 4.44823C1.63374 5.9832 0.784131 7.92031 0.4896 9.91972C0.370654 10.7127 0.370654 12.2873 0.4896 13.0803C0.812451 15.2949 1.79233 17.3736 3.25366 18.9652L3.63315 19.3787L3.49722 19.56C3.08374 20.1094 2.60796 20.7834 2.51733 20.959C2.37573 21.2365 2.37573 21.718 2.52866 22.0068C2.59097 22.1314 2.75522 22.307 2.8855 22.4033L3.12905 22.5732H7.97749C13.1601 22.5732 13.0525 22.5789 14.2476 22.2787C15.7599 21.9049 17.3798 21.0836 18.5863 20.0754C20.7216 18.2969 22.1093 15.8217 22.5115 13.0803C22.6304 12.2873 22.6304 10.7127 22.5115 9.91972C21.9847 6.31738 19.7757 3.23613 16.5416 1.59355C15.5107 1.06679 14.5875 0.755266 13.398 0.528704C12.8656 0.42675 10.6509 0.381437 10.0845 0.45507ZM13.0638 2.26757C16.6322 2.87929 19.5039 5.47909 20.5291 9.01913C20.9539 10.4918 20.9539 12.5082 20.5291 13.9809C20.0589 15.6008 19.283 16.9262 18.1048 18.1043C16.9267 19.2824 15.6013 20.0584 13.9814 20.5285C12.9335 20.8287 12.5937 20.8514 8.51558 20.8344L4.77163 20.8174L5.39468 19.9734L6.01772 19.1295L5.74585 18.9029C3.38394 16.9205 2.15483 14.4057 2.15483 11.5453C2.15483 9.84042 2.52866 8.37909 3.32163 6.95741C4.698 4.49921 7.14487 2.75468 9.89194 2.27324C10.7699 2.1203 12.1689 2.11464 13.0638 2.26757Z" fill="#30A9E0"/>
                                                    <path d="M6.85547 10.4011C6.41367 10.5937 6.17578 10.9732 6.17578 11.5C6.17578 12.2703 6.69688 12.7347 7.48418 12.6781C7.90332 12.6498 8.23184 12.4345 8.43008 12.0664C8.54336 11.8511 8.56035 11.7492 8.54336 11.432C8.5207 10.9675 8.32246 10.6447 7.9373 10.4408C7.64277 10.2879 7.16133 10.2652 6.85547 10.4011Z" fill="#30A9E0"/>
                                                    <path d="M10.9619 10.4182C10.5371 10.6164 10.3105 10.9959 10.3105 11.5113C10.3162 12.2137 10.792 12.6895 11.5 12.6895C11.8229 12.6895 12.14 12.5762 12.3439 12.3893C12.7971 11.9701 12.7971 11.0299 12.3439 10.6107C12.0154 10.3105 11.3867 10.2199 10.9619 10.4182Z" fill="#30A9E0"/>
                                                    <path d="M15.0614 10.4409C14.6762 10.6448 14.478 10.9676 14.4553 11.4321C14.4327 11.9022 14.5856 12.2364 14.9424 12.4856C15.3616 12.7801 16.0412 12.7518 16.4321 12.4233C16.9532 11.9815 16.9758 11.0753 16.4717 10.6108C16.1319 10.2879 15.4918 10.2143 15.0614 10.4409Z" fill="#30A9E0"/>
                                                </svg>
                                            </span>
                                            {
                                                post._embedded && post._embedded['replies'] 
                                                ? <span className='meta_title'>Comments ({post._embedded['replies']['0'].length})</span>
                                                : <span className='meta_title'>Comments (0)</span>
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