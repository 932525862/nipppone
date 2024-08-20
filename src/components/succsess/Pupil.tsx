import { HeroButton } from "../button/heroButton"


export const Pupil = () => {
  return (
    <section className="pupil" id="result">
        <div className="container">
            <div className="pupil-content ">
                <div className="title ">Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz</div>
                <div className="pupil-menu">
                    <div className="pupil-menu-left">
                        <h6><span>TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</h6>
                        <p>Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
                        <a href="#support"><HeroButton text='ariza qoldirish'></HeroButton></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
