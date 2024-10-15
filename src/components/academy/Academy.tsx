import { useTranslation } from "react-i18next"


export const Academy = () => {
    const { t } = useTranslation()
  return (
    <section className="academy" id="we">
        <div className="container">
            <div className="academy-content">
                <div className="title">{t("academy.title")}</div>
                <div className="academy-cards">
                    <div className="academy-card">
                        <div className="count flex-center">01</div>
                        <div className="card-title">{t("academy.name-1")}</div>
                        <div className="card-description">{t("academy.description-1")}</div>
                    </div>
                    <div className="academy-card">
                        <div className="count flex-center">02</div>
                        <div className="card-title">{t("academy.name-2")}</div>
                        <div className="card-description">{t("academy.description-2")}</div>
                    </div>
                    <div className="academy-card">
                        <div className="count flex-center">03</div>
                        <div className="card-title">{t("academy.name-3")}</div>
                        <div className="card-description">{t("academy.description-3")}</div>
                    </div>
                    <div className="academy-card">
                        <div className="count flex-center">04</div>
                        <div className="card-description">{t("academy.description-4")}</div>
                    </div>
                    <div className="academy-card">
                        <div className="count flex-center">05</div>
                        <div className="card-title">{t("academy.name-5")}</div>
                        <div className="card-description">{t("academy.description-5")}</div>
                    </div>
                    <div className="academy-card">
                        <div className="count flex-center">06</div>
                        <div className="card-description">{t("academy.description-6")}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
