import "../styles/globals.css";
import {Provider} from "react-redux";
import {store} from '../redux/store'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "../components/Navbar";



function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
         <Navbar />   
        <Component {...pageProps} />
      
      </Provider>
  )
}

export default MyApp;
