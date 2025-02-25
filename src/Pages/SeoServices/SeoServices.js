import Button from "../../Components/Button/Button";
import CallToAction from "../../Components/CallToAction/CallToAction";
import ImageText from "../../Components/ImageText/ImageText";
import PageBanner from "../../Components/PageBanner/PageBanner";
import TechTag from "../../Components/TechTagSection/TechTag";
import Testimonials from "../../Components/Testimonials/Testimonials";

function SeoServices(){
    return(
        <div className="seo_services_page">
            <PageBanner 
            title="Search Engine Optimization Services"
            description="Advanced and result-driven search engine optimization services with guaranteed results. We use the latest tools and tailored strategies to satisfy your business needs."
            />

            <TechTag 
            title="Search Engine Optimization Services To generate High-Quality leads 24/7"
            description={["SEO is the most competitive yet easiest marketing strategy to generate high-quality leads and sales for a particular business service and product. Only the right SEO services approach and the deep market research make a website rank for their targeted keywords. You get a website design and development from top-rated developers, but all of your money is in vain if you are not marketing your website. Your website is not just a collection of pages and content pieces, it’s more than that."]}
            />

            <ImageText
            backgroundColor="#F6FCFF"
            title="How SEO Services Help businesses to generate revenue"
            description="Each and every search starts from Google, either someone looking for a pizza store nearby, a doctor’s clinic, a real estate agent even, a plumber, a landscaper, or someone who is looking for a piece of content that helps him to learn new stuff. Search Engine Optimization services help a business website to rank on top of the Google Search Engine Result Page for the specific search keywords. Those are the keywords that allow customers to reach the most relevant website to avail the service they are in need of. There is no hidden fact that Google’s top 3 results get 75% of all the clicks made on Google SERP. Now imagine your website ranks in top results, now your website is getting clicked by the visitors searching for a specific service or product. This is the time when you are attracting high-quality leads and start generating revenue for your business."
            imageUrl="images/seo-services.webp"
            imagePosition="left"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default SeoServices;