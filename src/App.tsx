
import { useState } from 'react'
import './App.css'
import { About } from './components/about/About'
import { Academy } from './components/academy/Academy'
import { Course } from './components/course/Course'
import Faq from './components/faq/Faq'
import { Footer } from './components/footer/Footer'
import { GKS } from './components/gks/GKS'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import ModalCard from './components/modal/Modal'
import { Result } from './components/result/Result'
import { Pupil } from './components/succsess/Pupil'
import { Support } from './components/support/Support'
import { ToastContainer} from 'react-toastify';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ToastContainer />
      <ModalCard open={open} setOpen={setOpen}/>
      <div className="wrapper">
        <Header/>
        <main>
          <Hero/>
          <About/>
          <Result/>
          <GKS/>
          <Pupil setOpen={setOpen}/>
          <Course setOpen={setOpen}/>
          <Academy/>
          <Faq/>
          <Support/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
