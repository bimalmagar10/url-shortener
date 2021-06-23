import Head from 'next/head';
import styled from "styled-components";
import Layout from "../components/Layout";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Attribution = styled("div")`
      display:flex;
      flex-direction:column;
      background-color:var(--color-quinary);
      color:var(--color-white);
      align-items:center;
      a {
        font-size:1.6rem;
        text-decoration:none;
        color:currentColor;
      }
`;
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <Header/>
      <Features/>
      <CTA/>
      <Footer/>
      <Attribution>
          <marquee width="50%" direction="left" height="50px">
              <a href="https://www.facebook.com/Bimalmagar770077" target="_blank"> Challenge by Frontend Mentor.Coded with &hearts; by Bimal Thapa Magar</a>
          </marquee>
      </Attribution>
    </Layout>
  )
}
