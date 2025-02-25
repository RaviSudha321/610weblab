import Button from "../../Components/Button/Button";
import CallToAction from "../../Components/CallToAction/CallToAction";
import FullwidthImage from "../../Components/FullwidthImage/FullwidthImage";
import ImageText from "../../Components/ImageText/ImageText";
import PageBanner from "../../Components/PageBanner/PageBanner";
import TechTag from "../../Components/TechTagSection/TechTag";
import Testimonials from "../../Components/Testimonials/Testimonials";

function DigitalMarketingServices(){
    return(
        <div className="digital_marketing_services_page">
            <PageBanner 
            title="Digital Marketing Services for guaranteed results"
            description="We help businesses to grow with our flawless and result-oriented Digital Marketing Services. We have a tailored approach for all the marketing needs of your business. get in touch to learn more."
            />

            <TechTag 
            title="Result Driven Digital Marketing Services for Superior Return on Investment"
            description={["610 Web Lab proud itself for being one of the top-rated Internet Marketing Agencies worldwide. If you are struggling to get more traffic on your website, looking for a better return on ad spent, need more sales of your services or products, then your search for the ends here. We are here to cater to you with our result-oriented SEO (Search Engine Optimization), Pay Per Click, Facebook Ads, and Social Media Marketing services with 100% guaranteed results. We believe in ourselves that’s because we offer a money-back guarantee to our customers if we fail to deliver the desired results or client goals."]}
            />

            <ImageText
            backgroundColor="#F6FCFF"
            title="How Digital Marketing Services help businesses to grow and generate income"
            description="No business can accomplish its goal without marketing itself. It`s a digital era, and there is a digital race of brands to become the number one choice of their target audience. The goal of our digital marketing services is to showcase your brand on the internet where your customers are present. Whether they are searching on google or using their favorite social media handle, we help you to grab them."
            contentAboveButton={<p>An in-house team of 10 most experienced and creative marketers holds years of experience in every business industry and every business type. We deeply analyze your marketing goals and your target audience, then we create our specific approach to achieve your business goals.</p>}
            imageUrl="images/digital-marketing2.webp"
            imagePosition="left"
            imageWidth="450"
            />

            <ImageText 
            title="SEO"
            description="Get full-fledged Search engine optimization services with advanced level techniques and strategies to rank your website on top of search results. Beat your competitors and become the number 1 searched website for the keywords that generate business and generate revenue"
            imageUrl="images/seo.webp"
            imageWidth="550"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="PPC"
            description="Choose pay-per-click services by 610 Web lab if you want to target the only visitors who are ready to become your customers. Get low-cost PPC services, get a better return on investment, more click means more customers than your competitors."
            imageUrl="images/ppc.webp"
            imagePosition="left"
            imageWidth="417"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"21px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="Social Media Marketing"
            description="If you are still ignoring social media marketing, then you are missing out so much which can be helpful for your business. Get social media marketing services and reach out to your customers directly. SMM can help you build a successful brand so that you can derive sales directly from your social media handle."
            imageUrl="images/social-media-marketing.webp"
            imageWidth="650"
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
export default DigitalMarketingServices;