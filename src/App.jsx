import Hero from './components/Hero';
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar  from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
