import { FC } from "react"
import intiensiveImg from "../../assets/house-1.png"

interface CourseProps{
  setOpen: (item: boolean)=> void
}

export const Course: FC<CourseProps> = ({setOpen}) => {
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
                      <h6>Sertifikat</h6>
                      <p className="flex-center">Davomiyligi: 12 oy</p>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere perspiciatis blanditiis culpa, quo omnis!</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">Ro’yxatdan o’tish</button>
                      <div className="prices">999.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="card-img"><img src={intiensiveImg} alt="photo" /></div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Visa</h6>
                      <p className="flex-center">Davomiyligi: 12 oy</p>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio ipsam obcaecati voluptate laudantium provident?</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">Ro’yxatdan o’tish</button>
                      <div className="prices">999.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="card-img"><img src={intiensiveImg} alt="photo" /></div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Universititet</h6>
                      <p className="flex-center">Davomiyligi: 12 oy</p>
                    </div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi culpa iure voluptatibus similique corporis.</div>
                    <button onClick={() => setOpen(true)} className="btn">Ro’yxatdan o’tish</button>
                    <div className="prices">999.000 so’m /oy</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
