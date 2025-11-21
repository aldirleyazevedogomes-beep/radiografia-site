import "../styles/tailwind-output.css";
import Layout from "@/components/Layout"
import {Analytics} from "@vercel/analytics/react";

export default function App ({ Component, pageProps}) {

return (
  <Layout>
    <Component {...pageProps} />
    <Analytics />
  </Layout>
  
 );
}



