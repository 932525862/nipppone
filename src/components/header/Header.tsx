import logo from "../../assets/logo.png";
import en from "../../assets/en.png";
import ru from "../../assets/ru.png";
import uz from "../../assets/uz.png";
import i18n from "../../i18next";
import { LuMenu } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLDivElement>(null);
  function changeLng(text: string) {
    localStorage.setItem("nipponLng", text);
    i18n.changeLanguage(text);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(event.target as Node) // burger tugmasini tashqarida bosilganini tekshirish
      ) {
        setBurgerOpen(false);
      }
    };

    if (burgerOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [burgerOpen]);

  const { t } = useTranslation()

  return (
    <header>
      <div ref={mobileNavRef} className={`mobile-nav ${burgerOpen ? "mobile-nav-active" : ""}`}>
        <div className="close-nav" onClick={() => setBurgerOpen(false)}>
        <IoCloseSharp style={{fontSize: "30px"}}/>
        </div>
        <ul>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#we">{t('header.we')}</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#result">{t('header.results')}</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#course">{t('header.course')}</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="#faq">{t('header.faq')}</a>
          </li>
          <li onClick={() => setBurgerOpen(false)}>
            <a href="tel:+998953255000">
              <div className="tel-number">+998 (95) 325 5000</div>
            </a>
            <a href="tel:+998904447000">
                <div className="tel-number">+998 (90) 444 7000</div>
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
            <div className="logo-text">{t("header.japan")}</div>
            <nav>
              <ul className="d-flex">
                <li>
                  <a href="#we">{t("header.we")}</a>
                </li>
                <li>
                  <a href="#result">{t("header.results")}</a>
                </li>
                <li>
                  <a href="#course">{t("header.course")}</a>
                </li>
                <li>
                  <a href="#faq">{t("header.faq")}</a>
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
              <div ref={burgerButtonRef} className="burger" onClick={() => setBurgerOpen(true)}>
                <LuMenu style={{ fontSize: "30px" }} />
              </div>
            </div>

            <div className="header-contact d-flex items-center">
              <a href="tel:+998953255000">
                <div className="tel-number">+998 (95) 325 5000</div>
              </a>
              <a href="tel:+998904447000">
                <div className="tel-number">+998 (90) 444 7000</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
