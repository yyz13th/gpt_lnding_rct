import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Footer, Header, Possibility, WhatGPT3, Features } from './containers'

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
