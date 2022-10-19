import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";


const Layout = ({ children }) => {

    const [height, setHeight] = useState(0)

    useEffect(() => {
        if(window) {
            const { innerHeight: height } = window;
            console.log("height" , height)
            setHeight(height)
        }
    }, [])

    
  return (
    <div>
      <div style={{minHeight: "calc(100vh - 98px)"}}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
