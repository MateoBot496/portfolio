import { useState } from 'react'
import Header from './components/header'
import About from './components/about'
import Faq from './components/faq'
import Contact from './components/contact'
import Home from './components/home'
import Proyects from './components/proyects'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  


  return (
    <>
      <Header />
      <div className='content column'>
        <Home />
        <About />
        <Proyects />
        <Faq />
        <Contact />
      </div>
    </>
  )
}

export default App
