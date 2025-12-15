import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import VideoSection from './sections/VideoSection'
import Partnerships from './sections/Partnerships'
import Recruitment from './sections/Recruitment'
import Contact from './sections/Contact'
import CTABanner from './components/CTABanner'
import SeedBankPage from './pages/SeedBankPage'

// Page d'accueil
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Services />
        <Partnerships />
        <CTABanner />
        <Recruitment />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seed-bank" element={<SeedBankPage />} />
    </Routes>
  )
}

export default App
