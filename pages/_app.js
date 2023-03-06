import '@/styles/globals.css'
import '@/styles/NavBar.css'
import '@/styles/Footer.css'
import '@/styles/ProductsCards.css'
import '@/styles/ProductDetail.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
