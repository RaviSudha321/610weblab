import BlogsGrid from "../../Components/BlogsGrid/BlogsGrid";
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";

function Blog(){
    return(
        <div className="blog_page">
            <Helmet>
                <title>Blog Page</title>
            </Helmet>
            <PageBanner 
            title="Start, Build & Grow Your Business with 610weblab Blog"
            />
            <BlogsGrid />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Blog;