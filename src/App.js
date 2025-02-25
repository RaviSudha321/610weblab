import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes"; // Import the routes array

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(function(){
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
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
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <Footer />
      <Copyright />
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </div>
  );
}

export default App; 