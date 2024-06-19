import PageBanner from "../../Components/PageBanner/PageBanner";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Portfolios from '../../Components/Portfolios/Portfolios';

function Portfolio(){
    return(
        <>
            <PageBanner 
            title="Take a look at some of our projects"
            />
            <Portfolios />
            <CallToAction />
            <Testimonials />
        </>
    )
}

export default Portfolio;