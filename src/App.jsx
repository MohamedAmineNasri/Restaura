import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection />
      <Navbar />
    </main>
  )
}

export default App