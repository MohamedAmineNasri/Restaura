// App.js
import { ThemeProvider } from "./components/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

const App = () => {
  return (
      <ThemeProvider>
          <main className='overflow-y-hidden text-neutral-200 antialiased'>
              <HeroSection />
              <Navbar />
              <Dishes />
              <About />
              <Mission />
              <Expertise />
              <Review />
              <Contact />
              <Footer />
          </main>
      </ThemeProvider>
  );
};

export default App;
