import About from './components/About'
import Dishes from './components/Dishes'
import Expertise from './components/Expertise'
import HeroSection from './components/HeroSection'
import Mission from './components/Mission'
import Navbar from './components/Navbar'
import Review from './components/Review'


const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
    </main>
  )
}

export default App