import Button from "../../Components/Button/Button";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { Helmet } from "react-helmet";

function NotFound(){
    return(
        <div className="not_found_page">
            <Helmet>
                <title>404 Page</title>
            </Helmet>
            <PageBanner 
            title="Not Found"
            />
            <section className="not_found_sec">
                <div className="container">
                    <div className="not_found_content">
                        <h2 className="sec_title">404</h2>
                        <h3 className="sec_sub_title">Page Not Found!</h3>
                        <div className="description">The page you are looking for does not exist. If you think something broken, report a problem.</div>
                        <div className="not_found_btns">
                            <Button 
                            title="Back to Home"
                            link="/"
                            />
                            <Button 
                            title="Contact Us"
                            link="/contact-us"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound;