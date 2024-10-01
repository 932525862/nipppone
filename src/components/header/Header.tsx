import logo from "../../assets/logo.png";
import en from "../../assets/en.png";
import ru from "../../assets/ru.png";
import uz from "../../assets/uz.png";
import i18n from "../../i18next";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  function changeLng(text: string) {
    localStorage.setItem("nipponLng", text);
    i18n.changeLanguage(text);
  }

  return (
    <header>
      <div className={`mobile-nav ${burgerOpen ? "mobile-nav-active" : ""}`}>
        <div className="close-nav" onClick={() => setBurgerOpen(false)}>
        <IoCloseSharp style={{fontSize: "30px"}}/>
        </div>
        <ul>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#we">Nega biz</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#result">Natijalar</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#course">Kurslar</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#faq">Ko'p beriladigan savollar</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="tel:+998000000000">
              <div className="tel-number">+998 (00) 000 0000</div>
            </a>
            <a href="tel:+998000000000">
              <div className="header-contact-bottom">Hoziroq bog'laning</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="container" id="home">
        <div className="header-content d-flex items-center">
          <div className="header-left d-flex items-center">
            <div className="logo">
              <a href="#home">
                <img src={logo} alt="photo" />
              </a>
            </div>
          </div>
          <div className="header-right d-flex items-center justify-between">
            <div className="logo-text">
              Qashqadaryoda joylashgan Yapon tili o’quv markazi
            </div>
            <nav>
              <ul className="d-flex">
                <li>
                  <a href="#we">Nega biz</a>
                </li>
                <li>
                  <a href="#result">Natijalar</a>
                </li>
                <li>
                  <a href="#course">Kurslar</a>
                </li>
                <li>
                  <a href="#faq">Ko'p beriladigan savollar</a>
                </li>
              </ul>
            </nav>
            <div className="burger-language">
              <div className="languages">
                <div className="language" onClick={() => changeLng("en")}>
                  <img src={en} alt="flag" />
                </div>
                <div className="language" onClick={() => changeLng("ru")}>
                  <img src={ru} alt="flag" />
                </div>
                <div className="language" onClick={() => changeLng("uz")}>
                  <img src={uz} alt="flag" />
                </div>
              </div>
              <div className="burger" onClick={() => setBurgerOpen(true)}>
                <LuMenu style={{ fontSize: "30px" }} />
              </div>
            </div>

            <div className="header-contact d-flex items-center">
              <a href="tel:+998000000000">
                <div className="tel-number">+998 (00) 000 0000</div>
              </a>
              <a href="tel:+998000000000">
                <div className="header-contact-bottom">Hoziroq bog'laning</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
