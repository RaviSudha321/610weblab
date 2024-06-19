import Experience from "../../Components/Experience/Experience";
import Mission from "../../Components/Mission/Mission";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Qualities from "../../Components/Qualities/Qualities";
import Team from "../../Components/Team/Team";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";

function About(){
    return(
        <>
            <PageBanner 
            title="It’s always about You at 610weblab eServices!"
            />
            <WhatWeDo />
            <Mission />
            <Experience />
            <Qualities />
            <Team />
            <Testimonials />
        </>
    )
}

export default About; 