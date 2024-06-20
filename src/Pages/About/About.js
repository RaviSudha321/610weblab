import Experience from "../../Components/Experience/Experience";
import Mission from "../../Components/Mission/Mission";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Qualities from "../../Components/Qualities/Qualities";
import Team from "../../Components/Team/Team";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import { Helmet } from "react-helmet";

function About(){
    return(
        <div className="about_page">
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <PageBanner 
            title="It’s always about You at 610weblab eServices!"
            />
            <WhatWeDo />
            <Mission />
            <Experience />
            <Qualities />
            <Team />
            <Testimonials />
        </div>
    )
}

export default About; 