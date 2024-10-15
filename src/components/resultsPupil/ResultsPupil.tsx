import { useTranslation } from "react-i18next"


const ResultsPupil = () => {
    const { t } = useTranslation()
  return (
    <section className="about" id="result">
        <div className="container">
            <div className="about-content d-flex flex-column items-center">
                <h4 className="title">{t("result-pupil.title")}</h4>
                <div className="about-cards d-flex justify-center">
                    <div className="about-card">
                        <div className="card-img flex-center">500+</div>
                        <div className="card-text">{t("result-pupil.description-1")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center">500+</div>
                        <div className="card-text">{t("result-pupil.description-2")}</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center">320+</div>
                        <div className="card-text">{t("result-pupil.description-3")}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ResultsPupil