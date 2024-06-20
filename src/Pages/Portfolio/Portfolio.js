import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Portfolios from '../../Components/Portfolios/Portfolios';
import { Helmet } from "react-helmet";

function Portfolio(){
    return(
        <div className="portfolios_page">
            <Helmet>
                <title>Portfolios Page</title>
            </Helmet>
            <PageBanner 
            title="Take a look at some of our projects"
            />
            <Portfolios />
            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Portfolio;