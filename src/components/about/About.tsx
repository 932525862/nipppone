
import chatImg from "../../assets/chat-bubble-dynamic-color.png"
import keyImg from "../../assets/key-dynamic-color.png"
import rocketImg from "../../assets/rocket-dynamic-color.png"
import targetImg from "../../assets/target-dynamic-color.png"
import travelImg from "../../assets/travel-dynamic-color.png"
import moneyImg from "../../assets/money-dynamic-color.png"
import { useTranslation } from "react-i18next"


export const About = () => {
    const { t } = useTranslation()
  return (
    <section className="about">
        <div className="container">
            <div className="about-content d-flex flex-column items-center">
                <h4 className="title">{t("about.title")}</h4>
                <div className="about-cards d-flex justify-center">
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={chatImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-1")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={rocketImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-2")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={moneyImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-3")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={travelImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-4")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={targetImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-5")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={keyImg} alt="photo" /></div>
                        <div className="card-text">{t("about.text-6")}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
