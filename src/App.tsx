import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import BestsellerProducts from './components/BestsellerProducts'
import Services from './components/Services'
import FeaturedPosts from './components/FeaturedPosts'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BestsellerProducts />
        <Services />
        <FeaturedPosts />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
