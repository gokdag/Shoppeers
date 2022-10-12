import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Module001 from "../components/Module-001";
import Module002 from "../components/Module-002";
import Module003 from "../components/Module-003";

// Module001 => Slider Elbise
// Module002 => Trençkot, Gömlek, Sweatshirt
// Module003 => Etek, Aksesuar, Trençkot

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopPeers</title>
      </Head>
      <Layout>
        <Module002 />
        <Module001 />
        <Module003 />
      </Layout>
    </>
  );
}
