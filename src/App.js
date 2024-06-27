import { Routes, Route } from "react-router-dom";
import Copyright from "./Components/Copyright/Copyright";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import WebDesign from "./Pages/WebDesign/WebDesign";
import Careers from './Pages/Careers/Careers'
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Search from "./Pages/Search/Search";
import WebDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";
import PhpDevelopment from "./Pages/PhpDevelopment/PhpDevelopment";
import ShopifyDevelopment from "./Pages/ShopifyDevelopment/ShopifyDevelopment";
import OpenSourceDevelopment from "./Pages/OpenSourceDevelopment/OpenSourceDevelopment";
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(function(){
      setLoading(false);
    }, 2000)
  }, [])

  if(loading){
    return <Loader />
  }

  return (
    <div className="App">
      <ScrollToTop />
        <Header />
        <div id="page_content" className="page_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postSlug" element={<SingleBlog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/search/:keyword" element={<Search />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/php-development" element={<PhpDevelopment />} />
            <Route path="/shopify-development" element={<ShopifyDevelopment />} />
            <Route path="/open-source-development" element={<OpenSourceDevelopment />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      <Copyright />
    </div>
  );
}

export default App; 