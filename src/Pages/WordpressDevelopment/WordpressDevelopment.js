import Button from "../../Components/Button/Button";
import CallToAction from "../../Components/CallToAction/CallToAction";
import FullwidthImage from "../../Components/FullwidthImage/FullwidthImage";
import IconList from "../../Components/IconList/IconList";
import ImageText from "../../Components/ImageText/ImageText";
import PageBanner from "../../Components/PageBanner/PageBanner";
import TechTag from "../../Components/TechTagSection/TechTag";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WebServiceBox from "../../Components/WebServiceBox/WebServiceBox";

function WordpressDevelopment(){
    return(
        <div className="wordpress_development_page">
            <PageBanner 
            title="WordPress Development Services"
            description="Get custom WordPress development, WordPress theme customization, and plugin development only at 610 Web Lab. We help businesses to grow with affordable yet professional WordPress Development Solutions."
            />

            <TechTag
            title="WordPress Development Services"
            description={["WordPress is the most loved CMS for small business owners, service providers, and writers, and a 40% share of the whole industry is occupied by WordPress. WordPress is popular because of its flexible characteristics, pre-built themes, and easy-to-use nature.", "WordPress has been introduced as the most popular web content publishing platform in web development. But due to its really beautiful UX to a website while offering the best user experience it is preferred by most of the business owners to showcase their services more appealingly and attractively."]}
            />

            <ImageText 
            title="What we offer in WordPress Development services"
            description="610 Web Lab is here with the most professional & advanced WordPress development solutions. If you are looking for a reliable WordPress development company then 610 Web Lab is your one-stop solution."
            imageUrl="images/wordpress.webp"
            imagePosition="right"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Website Designing"
            description="Improves the UI/UX with our WordPress website design services. We create the most beautiful, appealing, and user-friendly website that helps you to convert your visitors into customers."
            imageUrl="images/wordpress-designing.webp"
            imagePosition="left"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Theme Development"
            description="610 Web Lab converts an idea into reality by providing custom theme development services to our clients."
            imageUrl="images/wordpress-theme.webp"
            imagePosition="right"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <FullwidthImage
            imageUrl="images/curve-image2.webp"
            alt="curve image"
            imageWidth="947"
            />

            <ImageText 
            title="WordPress Integrations"
            description="Are you stuck when integrating your website with third-party tools and API? Are you looking for an expert to help you with the integration? No need to worry 610 Web Lab is here to manage all your WordPress integrations."
            imageUrl="images/wordpress-intigration.webp"
            imagePosition="left"
            imageWidth="535"
            buttons={
                <Button
                title="Hire An Expert"
                link="/contact-us"
                icon={<img src="/images/hire-an-expert.svg" alt="Hire an Expert" style={{width:"20px"}} />}
                />
            }
            />

            <section style={{backgroundColor:"#F6FCFF"}}>
                <div className="container" style={{maxWidth:"1050px"}}>
                    <h2 className="sec_title">Most Reliable WordPress Development Company</h2>
                    <p style={{marginTop: "25px", textAlign:"center"}}>610 Web Lab is here with the most professional & advanced WordPress development solutions. If you are looking for a reliable WordPress development company then 610 Web Lab is your one-stop solution.
                    Even though there are thousands of pre-built and ready-to-use themes available in WordPress for every business, but if you are looking to go the extra mile and build your website with custom fields and placements of text and images, then you need to hire a professional who is completely aware of the WordPress functionality and have practical working knowledge and we will work on your WordPress project to get you the desired results.</p>
                </div>
            </section>

            <ImageText 
            title="Why 610 Web Lab for WordPress Development"
            imageUrl="images/wordpress-development-process.webp"
            imagePosition="right"
            contentAboveButton={[
                <IconList
                icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.55341 0.469786C4.58856 0.625645 3.56434 1.06354 2.78876 1.65357C2.48075 1.89108 1.89071 2.48111 1.65321 2.78912C1.04091 3.5944 0.61415 4.61119 0.465712 5.61686C0.384072 6.18092 0.410048 7.21256 0.521376 7.73209C0.680947 8.47057 1.00751 9.25358 1.40829 9.85846C2.35087 11.2797 3.8204 12.2297 5.5163 12.5118C6.17313 12.6231 7.16024 12.6008 7.77997 12.4635C10.1809 11.9217 11.9548 10.1294 12.4817 7.70983C12.5522 7.38697 12.5634 7.22369 12.5634 6.50006C12.5634 5.77643 12.5522 5.61315 12.4817 5.29029C11.9511 2.85963 10.1401 1.04498 7.73173 0.521739C7.25302 0.417832 6.05067 0.391856 5.55341 0.469786ZM7.42743 1.67584C9.1827 2.01354 10.6374 3.31236 11.1903 5.03424C11.5058 6.02135 11.4872 7.1235 11.1347 8.12174C10.5446 9.79166 9.1122 11.0126 7.35321 11.3428C6.88934 11.4319 6.11747 11.4319 5.66474 11.3465C3.60888 10.9606 2.03544 9.38717 1.65321 7.33502C1.57157 6.89342 1.57157 6.1067 1.65321 5.6651C1.99091 3.85416 3.2786 2.37721 5.01532 1.81315C5.2788 1.72779 5.82059 1.62018 6.14716 1.58678C6.41434 1.5608 7.06747 1.60533 7.42743 1.67584Z" fill="#30A9E0"/>
                    <path d="M6.48887 4.00625C6.26992 4.2252 6.0918 4.42188 6.0918 4.44043C6.0918 4.45898 6.41465 4.79668 6.8043 5.19004L7.52051 5.90625H5.57969H3.64258V6.5V7.09375H5.57969H7.52051L6.8043 7.80996C6.41465 8.20332 6.0918 8.54102 6.0918 8.55957C6.0918 8.58184 6.27734 8.78223 6.5 9.00488L6.9082 9.41309L8.16992 8.15137C8.86387 7.45742 9.45762 6.8377 9.4873 6.77461C9.55039 6.6373 9.55781 6.3998 9.50215 6.25137C9.46875 6.1623 6.96387 3.60547 6.9082 3.60547C6.89707 3.60547 6.70781 3.78359 6.48887 4.00625Z" fill="#30A9E0"/>
                    </svg>
                    }
                items={['Supportive Team', 'Expert and Certified WordPress developers', 'Pocket-Friendly charges', '24*7 support and maintenance facilities', 'Confidentiality and data protection']}
                />
            ]
            }
            />

            <CallToAction />
            <Testimonials />
        </div>
    )
}
export default WordpressDevelopment;