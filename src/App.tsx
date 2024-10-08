
import { useState } from 'react'
import './App.css'
import { About } from './components/about/About'
import { Academy } from './components/academy/Academy'
import { Course } from './components/course/Course'
import Faq from './components/faq/Faq'
import { Footer } from './components/footer/Footer'
import { JLPT } from './components/jlpt/Jlpt'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import ModalCard from './components/modal/Modal'
import { Result } from './components/result/Result'
import { University } from './components/university/University'
import { Support } from './components/support/Support'
import { ToastContainer} from 'react-toastify';
import News from './components/news/News'
import ResultsPupil from './components/resultsPupil/ResultsPupil'

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
    <div className='bg-body'></div>
      <ToastContainer />
      <ModalCard open={open} setOpen={setOpen}/>
      <div className="wrapper">
        <Header/>
        <main>
          <Hero/>
          <News/>
          <About/>
          <Result/>
          <JLPT/>
          <ResultsPupil/>
          <University setOpen={setOpen}/>
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
