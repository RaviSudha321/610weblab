import BlogBox from '../BlogBox/BlogBox';
import './blogsGrid.css';
import React, { useEffect, useState } from 'react';


function BlogsGrid(){

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(2);
    const [offset, setOffset] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const getAllBlogs = async()=>{
        try {
            const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/posts?_embed`);
            if(!response.ok){
                console.log('All blogs fetch issue');
            }
            const data = await response.json();
            setTotalPages(data.length / perPage);
        }
        catch (error) {
            console.log('blogs error', error);
        }
    }

    const getBlogs = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/posts?_embed&page=${currentPage}&per_page=${perPage}&offset=${offset}`);
            if(!response.ok){
                console.log('Blogs fetch issue');
            }
            const data = await response.json();
            setBlogs(data);
        }
        catch (error) {
            console.log('blogs error', error);
        }
    }

    const handlePagination = (page) => {
        if(page) {
            console.log('page', page)
            setCurrentPage(page);
            setOffset(perPage*(page-1));
        }
    }
    console.log('offset', offset)
    console.log('currentPage', currentPage)

    useEffect(()=>{
        const fetchData = async () => {
            await getAllBlogs();
            await getBlogs();
        };
      
        fetchData();
    },[])

    useEffect(()=>{
        getBlogs();
    }, [currentPage])

    return(
        <section className='blogs_grid_sec'>
            <div className='container'>
                {
                    blogs.length > 0 &&
                    <div className='blogs_grid_content'>
                        <div className='blogs_grid'>
                            {
                                blogs.map((blog, index)=>{
                                    return(
                                        <BlogBox blog={blog} key={index} />
                                    )
                                })
                            }
                        </div>
                        {
                            totalPages > 1 &&
                            <div className='pagination'>
                                <ul className='pagination_items'>
                                    {currentPage > 1 && <li><a href="#" onClick={(e)=>{e.preventDefault(); handlePagination(1);}}>Prev</a></li>}
                                    {
                                        [...Array(totalPages)].map((x, i)=>{
                                            return(
                                                <React.Fragment key={i}>
                                                    {
                                                    currentPage === i+1 ?
                                                    <li><span>{i + 1}</span></li> :
                                                    <li><a href="#" data-number={i+1} onClick={(e)=>{e.preventDefault(); handlePagination(i+1);}}>{i + 1}</a></li>
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                    {currentPage < totalPages && <li><a href="#" onClick={(e)=>{e.preventDefault(); handlePagination(totalPages);}}>Next</a></li>}
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default BlogsGrid;