import Feature from "../components/Feature";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='GeoForest Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Services />
      </Layout>
    </>
  );
}
