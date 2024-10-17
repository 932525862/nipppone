import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Academy } from "./components/academy/Academy";
import { Course } from "./components/course/Course";
import Faq from "./components/faq/Faq";
import { Footer } from "./components/footer/Footer";
import { JLPT } from "./components/jlpt/Jlpt";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import ModalCard from "./components/modal/Modal";
import { Result } from "./components/result/Result";
import { University } from "./components/university/University";
import { Support } from "./components/support/Support";
import { ToastContainer } from "react-toastify";
import News from "./components/news/News";
import ResultsPupil from "./components/resultsPupil/ResultsPupil";
import Loader from "./components/loader/Loader";
import License from "./components/license/License";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-body"></div>
          <ToastContainer />
          <ModalCard open={open} setOpen={setOpen} />
          <div className="wrapper">
            <Header />
            <main>
              <Hero />
              <News />
              <About />
              <Result />
              <JLPT />
              <ResultsPupil />
              <University setOpen={setOpen} />
              <Course setOpen={setOpen} />
              <License/>
              <Academy />
              <Faq />
              <Support />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
