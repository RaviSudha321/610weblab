import Button from "../../Components/Button/Button";
import Hirings from "../../Components/Hirings/Hirings";
import ImageText from "../../Components/ImageText/ImageText";
import PageBanner from "../../Components/PageBanner/PageBanner";
import SelectionProcess from "../../Components/SelectionProcess/SelectionProcess";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WorkCulture from "../../Components/WorkCulture/WorkCulture";
import { Helmet } from "react-helmet";

function Careers(){
    return(
        <div className="careers_page">
            <Helmet>
                <title>Career Page</title>
            </Helmet>
            <PageBanner
            title="Join Our Team!"
            description="Check out our current job openings and shoot us your resume, links or whatever best tells your story."
            />
            <Hirings />
            <SelectionProcess />
            <ImageText 
            title="One Team, One Heart, One Legacy."
            description="At eSparkBiz, we cultivate a positive workplace where happy employees are our top priority. Our work culture ensures we hire the right people and give them the freedom for creativity and a result-driven work atmosphere to solve incremental challenges and add value. Career growth is most important for work satisfaction, and we provide ample opportunities, infrastructure, and work environment to our employees to achieve it."
            buttons={<Button title="Join Our Team" link="/contact-us" />}
            imageUrl="images/team-trip.webp"
            imageWidth="630"
            />
            <WorkCulture />
            <Testimonials />
        </div>
    )
}

export default Careers;