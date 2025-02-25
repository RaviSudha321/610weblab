import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Contact from "./Pages/Contact/Contact";
import WebDesign from "./Pages/WebDesign/WebDesign";
import Careers from "./Pages/Careers/Careers";
import Search from "./Pages/Search/Search";
import WebDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";
import PhpDevelopment from "./Pages/PhpDevelopment/PhpDevelopment";
import ShopifyDevelopment from "./Pages/ShopifyDevelopment/ShopifyDevelopment";
import OpenSourceDevelopment from "./Pages/OpenSourceDevelopment/OpenSourceDevelopment";
import ResponsiveWebsite from "./Pages/ResponsiveWebsite/ResponsiveWebsite";
import WordpressDevelopment from "./Pages/WordpressDevelopment/WordpressDevelopment";
import CustomSoftwareDevelopment from "./Pages/CustomSoftwareDevelopment/CustomSoftwareDevelopment";
import DigitalMarketingServices from "./Pages/DigitalMarketingServices/DigitalMarketingServices";
import SocialMediaMarketing from "./Pages/SocialMediaMarketing/SocialMediaMarketing";
import FacebookAds from "./Pages/FacebookAds/FacebookAds";
import PpcServices from "./Pages/PpcServices/PpcServices";
import SeoServices from "./Pages/SeoServices/SeoServices";
import Category from "./Pages/Category/Category";
import NotFound from "./Pages/NotFound/NotFound";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/blog", element: <Blog />, index: true },
    { path: "/blog/:postSlug", element: <SingleBlog /> },
    { path: "/contact-us", element: <Contact /> },
    { path: "/web-design", element: <WebDesign /> },
    { path: "/careers", element: <Careers /> },
    { path: "/search/:keyword", element: <Search /> },
    { path: "/web-development", element: <WebDevelopment /> },
    { path: "/digital-marketing-services", element: <DigitalMarketing /> },
    { path: "/php-development", element: <PhpDevelopment /> },
    { path: "/shopify-development", element: <ShopifyDevelopment /> },
    { path: "/open-source-development", element: <OpenSourceDevelopment /> },
    { path: "/responsive-website-design-and-development", element: <ResponsiveWebsite /> },
    { path: "/wordpress-development", element: <WordpressDevelopment /> },
    { path: "/custom-software-development", element: <CustomSoftwareDevelopment /> },
    { path: "/digital-marketing-services", element: <DigitalMarketingServices /> },
    { path: "/social-media-marketing", element: <SocialMediaMarketing /> },
    { path: "/facebook-ads", element: <FacebookAds /> },
    { path: "/ppc-services", element: <PpcServices /> },
    { path: "/seo-services", element: <SeoServices /> },
    { path: "/category/:categorySlug", element: <Category /> },
    { path: "/*", element: <NotFound /> },
  ];
  
  export default routes;