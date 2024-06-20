import BlogBox from "../../Components/BlogBox/BlogBox";
import CallToAction from "../../Components/CallToAction/CallToAction";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";

function Search(){
    return(
        <div className="search_result_page">
            <Helmet>
                <title>Search Result Page</title>
            </Helmet>
            <PageBanner
            title="Search Result"
            />
            <section className="search_results">
                <div className="container">
                    <div className="blogs_grid">
                        <BlogBox />
                        <BlogBox />
                        <BlogBox />
                    </div>
                </div>
            </section>
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Search;