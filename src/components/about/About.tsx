
import chatImg from "../../assets/chat-bubble-dynamic-color.png"
import keyImg from "../../assets/key-dynamic-color.png"
import rocketImg from "../../assets/rocket-dynamic-color.png"
import targetImg from "../../assets/target-dynamic-color.png"
import travelImg from "../../assets/travel-dynamic-color.png"
import moneyImg from "../../assets/money-dynamic-color.png"


export const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about-content d-flex flex-column items-center">
                <h4 className="title">Nippon Study Center aniq siz uchun agar siz:</h4>
                <div className="about-cards d-flex justify-center">
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={chatImg} alt="photo" /></div>
                        <div className="card-text"><span>Qisqa</span> muddat ichida Yapon tilida gapirishni istaysiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={rocketImg} alt="photo" /></div>
                        <div className="card-text">Yapon tili o’rganib o’z <span>karyerangizni</span> qurmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={moneyImg} alt="photo" /></div>
                        <div className="card-text">JLPT sertifikatini olib Yaponiyaning nufuzli universitetlariga <span>GRANT</span> yutmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={travelImg} alt="photo" /></div>
                        <div className="card-text">Yaponiya davlatida <span>o’qish</span> va <span>ishlash</span> uchun ketmoqchisiz</div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={targetImg} alt="photo" /></div>
                        <div className="card-text">Yapon tilini o’rta darajada bilasiz va darajangizni <span>oshirmoqchisiz</span></div>
                    </div>
                    <div className="about-card">
                        <div className="card-img flex-center"><img src={keyImg} alt="photo" /></div>
                        <div className="card-text">Ko’p yillardan buyon o’qib ham <span>natijaga</span> chiqa olmayapsiz</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
