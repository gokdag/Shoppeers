import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Module001 from "../components/Module-001"

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopPeers</title>
      </Head>
      <Layout>
        <Module001/>
      </Layout>
    </>
  );
}