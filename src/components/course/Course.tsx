import intiensiveImg from "../../assets/house-1.png"
// import easyImg from "../../assets/house-2.png"
// import individualImg from "../../assets/house-3.png"

export const Course = () => {
  return (
    <section className="course" id="course">
        <div className="container">
            <div className="course-content">
              <div className="title">O’zingizga mos kursga ro’yxatdan o’ting</div>
              <div className="course-cards">
                <div className="course-card">
                  <div className="card-img"><img src={intiensiveImg} alt="photo" /></div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Intiensive</h6>
                      <p className="flex-center">Davomiyligi: 5 oy</p>
                    </div>
                    <div className="description"><span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button className="btn">Ro’yxatdan o’tish</button>
                      <div className="prices">970.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="card-img"><img src={intiensiveImg} alt="photo" /></div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Odatiy</h6>
                      <p className="flex-center">Davomiyligi: 5 oy</p>
                    </div>
                    <div className="description">Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button className="btn">Ro’yxatdan o’tish</button>
                      <div className="prices">560.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="card-img"><img src={intiensiveImg} alt="photo" /></div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Individual</h6>
                      <p className="flex-center">Davomiyligi: 5 oy</p>
                    </div>
                    <div className="description">O’qituvchidan <span>individual</span> dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.</div>
                    <button className="btn">Ro’yxatdan o’tish</button>
                    <div className="prices">1.800.000 so’m /oy</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
