import { NavLink } from 'react-router-dom';
import BlogBox from '../BlogBox/BlogBox';
import './blogsGrid.css';


function BlogsGrid(){
    return(
        <section className='blogs_grid_sec'>
            <div className='container'>
                <div className='blogs_grid_content'>
                    <div className='blogs_grid'>
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                    </div>
                    <div className='pagination'>
                        <ul className='pagination_items'>
                            <li><NavLink to="#">Prev</NavLink></li>
                            <li><NavLink to="#">1</NavLink></li>
                            <li><span>2</span></li>
                            <li><NavLink to="#">3</NavLink></li>
                            <li><NavLink to="#">Next</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsGrid;