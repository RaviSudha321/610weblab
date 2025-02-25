import './home.css';
import BlogsCarousel from "../../Components/BlogsCarousel/BlogsCarousel";
import Button from "../../Components/Button/Button";
import Faqs from "../../Components/Faqs/Faqs";
import Features from "../../Components/Features/Features";
import ImageText from "../../Components/ImageText/ImageText";
import Projects from "../../Components/Projects/Projects";
import Industries from "../../Components/Industries/Industries";
import SuccessCounter from "../../Components/SuccessCounter/SuccessCounter";
import TechnologiesTabs from "../../Components/TechnologiesTabs/TechnologiesTabs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Trusted from "../../Components/Trusted/Trusted";
import Services from "../../Components/Services/Services";
import Recognized from "../../Components/Recognized/Recognized";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Ratings from "../../Components/Ratings/Ratings";
import { Helmet } from "react-helmet";
import OurSteps from '../../Components/OurSteps/OurSteps';


function Home(){
    return(
        <div className="home_page">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <HomeBanner />
            <Ratings />
            <Recognized />
            <Services />
            <Projects />
            <TechnologiesTabs />
            <Features />
            <ImageText
            backgroundImageUrl="images/image-text-bg.webp"
            title="Seeking a Web Development Company for Your Vision?"
            description="Discover the perfect match for your business vision with 610 Web Lab. Let our expert team transform your ideas into stunning reality with our top-notch web design services. Get ready to elevate your online presence and stand out from the competition. Partner with us today!"
            imageUrl="images/seeking.webp"
            imageWidth="530"
            buttons={
                <>
                    <Button title="Learn More" link="/web-development" />
                    <Button 
                        title="Request A Quote"
                        link="/contact-us"
                        icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                    />
                </>
            }
            content={<SuccessCounter />}
            />
            <Industries />
            <BlogsCarousel />
            <Trusted />
            <OurSteps />
            <Faqs />
            <Testimonials />
        </div>
    )
}

export default Home;