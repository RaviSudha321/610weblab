import BlogsGrid from "../../Components/BlogsGrid/BlogsGrid";
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";

function Blog(){
    return(
        <div className="blog_page">
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