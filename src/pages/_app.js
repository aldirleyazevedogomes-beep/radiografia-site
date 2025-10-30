import "../styles/tailwind-output.css";
import Layout from "@/components/Layout"

export default function App ({ Component, pageProps}) {

return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  
 );
}



