import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Partnerships from './sections/Partnerships'
import Realtime from './sections/Realtime'
import Recruitment from './sections/Recruitment'
import Contact from './sections/Contact'
import CTABanner from './components/CTABanner'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Partnerships />
        <Realtime />
        <CTABanner />
        <Recruitment />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
