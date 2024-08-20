
import './App.css'
import { About } from './components/about/About'
import { Academy } from './components/academy/Academy'
import { Course } from './components/course/Course'
import Faq from './components/faq/Faq'
import { Footer } from './components/footer/Footer'
import { GKS } from './components/gks/GKS'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Result } from './components/result/Result'
import { Pupil } from './components/succsess/Pupil'
import { Support } from './components/support/Support'

function App() {

  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <main>
          <Hero></Hero>
          <About></About>
          <Result></Result>
          <GKS></GKS>
          <Pupil></Pupil>
          <Course></Course>
          <Academy></Academy>
          <Faq></Faq>
          <Support></Support>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
