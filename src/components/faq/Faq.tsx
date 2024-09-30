import { useState } from "react";

interface AnswerFaq{
  id: number,
  question: string,
  answer: string
}


const answerFaq: AnswerFaq[] = [
  {
    id: 1,
    question: "Yapon tilini noldan o'rganishni boshlashim mumkinmi?",
    answer: "Ha, albatta! Bizning kurslarimiz yangi boshlovchilar uchun moslashtirilgan. Noldan boshlagan talabalar yapon tilining asoslarini o'rganishadi va keyinchalik tilni rivojlantirish uchun chuqurlashtirilgan darslarga o'tishadi."
  },
  {
    id: 2,
    question: "Yaponiyada o'qish uchun qanday talablarga javob berishim kerak?",
    answer: "Odatda, Yaponiyadagi universitetlar til bilimi (JLPT sertifikati), o'rta maktab yoki bakalavr diplomi, va ba'zi hollarda IELTS yoki TOEFL kabi til testlari natijalarini talab qiladi. Biz sizni bu jarayonga tayyorlaymiz."
  },
  {
    id: 3,
    question: "Yaponiyaga o'qishga qanday dasturlar orqali yuborasiz?",
    answer: "Bizda Yaponiyadagi universitetlar, til maktablari va stipendiya dasturlari bilan hamkorlik mavjud. Talabalar o'z qiziqishlariga mos keladigan dasturlarni tanlashlari mumkin va biz ularni hujjat topshirishdan boshlab qabulgacha bo'lgan barcha bosqichlarda qo'llab-quvvatlaymiz."
  },
  {
    id: 4,
    question: "Yapon tilini o'rganish qancha vaqtni oladi?",
    answer: "Bu sizning qobiliyatingiz va o'qishga ajratadigan vaqtingizga bog'liq. Odatda, boshlang'ich darajadan o'rtacha suhbat darajasigacha yetishish uchun 1-2 yil talab etiladi. Bizda intensiv va odatdagi darslar mavjud bo'lib, ularni sizning jadvalingizga moslashtirish mumkin."
  },
  {
    id: 5,
    question: "Yaponiyaga o'qishga borish uchun viza olishda yordam bera olasizmi?",
    answer: "Ha, biz sizga talabalar vizasini olish uchun barcha zarur hujjatlarni tayyorlashda yordam beramiz. Viza olish jarayonida ko'maklashish ham bizning xizmatlarimiz qatoriga kiradi."
  },
  {
    id: 6,
    question: "O'qish va yashash xarajatlari haqida ma'lumot bera olasizmi?",
    answer: "Yaponiyadagi o'qish va yashash xarajatlari universitet yoki til maktabi joylashgan shaharga qarab farq qiladi. O'rtacha hisobda, o'qish uchun yillik to'lov 5,000-10,000 AQSh dollari orasida, yashash xarajatlari esa oyiga 800-1,500 AQSh dollari bo'lishi mumkin. Biz sizga qo'shimcha ma'lumot va arzonroq variantlar bo'yicha maslahat bera olamiz."
  }
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-content">
          <div className="title">Ko’p beriladigan savollar</div>
          <div className="faq-accardions">
            {
              answerFaq.map((item: AnswerFaq, index: number) => {
                return <div className="faq-accardion" key={index}>
                <div className="faq-accardion-header" onClick={() => toggleOpen(index)}>
                  <p>
                    {item.question}
                  </p>
                  <div className={`plus ${openIndex ==index ? "active" : ''}`} onClick={() => toggleOpen(index)}>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#5FACA9" />
                      <rect
                        x="16.043"
                        y="8"
                        width="2.92308"
                        height="19"
                        rx="1.46154"
                        fill="white"
                      />
                      <rect
                        x="8"
                        y="18.9614"
                        width="2.92308"
                        height="19"
                        rx="1.46154"
                        transform="rotate(-90 8 18.9614)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className={`faq-accardion-body ${openIndex ==index ? 'show' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
              })
            }
            
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
