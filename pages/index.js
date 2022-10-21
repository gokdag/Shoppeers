import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Module001 from "../components/Module-001";
import Module002 from "../components/Module-002";
import Module003 from "../components/Module-003";
import Module004 from "../components/Module-004";
import TabsMenu from "./TabsMenu";

// Module001 => Slider Elbise
// Module002 => Trençkot, Gömlek, Sweatshirt
// Module003 => Etek, Aksesuar, Trençkot
// Module004 => Slider Banner

function Home({ isMobileView }) {
  // console.log(isMobileView);
  return (
    <>
      <Head>
        <title>ShopPeers</title>
      </Head>
      <Layout>
        <Module004 isMobile={isMobileView} />
        <Module001 isMobile={isMobileView} />
        {/* <Module002 isMobile={isMobileView} /> */}
        <Module003 isMobile={isMobileView} /> 
        {/* <TabsMenu /> */}
      </Layout>
    </>
  );
}

// Next JS Mobile Çözümü
export async function getServerSideProps(context) {
  let isMobileView = (
    context.req ? context.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    props: {
      isMobileView: Boolean(isMobileView),
    },
  };
}

export default Home;
