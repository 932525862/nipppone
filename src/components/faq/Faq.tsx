import { useState } from "react";
import { useTranslation } from "react-i18next";

interface AnswerFaq {
  id: number;
  question: string;
  answer: string;
}

const answerFaq = {
  uz: [
    {
      id: 1,
      question: "Yapon tilini noldan o'rganishni boshlashim mumkinmi?",
      answer:
        "Ha, albatta! Bizning kurslarimiz yangi boshlovchilar uchun moslashtirilgan. Noldan boshlagan talabalar yapon tilining asoslarini o'rganishadi va keyinchalik tilni rivojlantirish uchun chuqurlashtirilgan darslarga o'tishadi.",
    },
    {
      id: 2,
      question:
        "Yaponiyada o'qish uchun qanday talablarga javob berishim kerak?",
      answer:
        "Odatda, Yaponiyadagi universitetlar til bilimi (JLPT sertifikati), o'rta maktab yoki bakalavr diplomi, va ba'zi hollarda IELTS yoki TOEFL kabi til testlari natijalarini talab qiladi. Biz sizni bu jarayonga tayyorlaymiz.",
    },
    {
      id: 3,
      question: "Yaponiyaga o'qishga qanday dasturlar orqali yuborasiz?",
      answer:
        "Bizda Yaponiyadagi universitetlar, til maktablari va stipendiya dasturlari bilan hamkorlik mavjud. Talabalar o'z qiziqishlariga mos keladigan dasturlarni tanlashlari mumkin va biz ularni hujjat topshirishdan boshlab qabulgacha bo'lgan barcha bosqichlarda qo'llab-quvvatlaymiz.",
    },
    {
      id: 4,
      question: "Yapon tilini o'rganish qancha vaqtni oladi?",
      answer:
        "Bu sizning qobiliyatingiz va o'qishga ajratadigan vaqtingizga bog'liq. Odatda, boshlang'ich darajadan o'rtacha suhbat darajasigacha yetishish uchun 1-2 yil talab etiladi. Bizda intensiv va odatdagi darslar mavjud bo'lib, ularni sizning jadvalingizga moslashtirish mumkin.",
    },
    {
      id: 5,
      question:
        "Yaponiyaga o'qishga borish uchun viza olishda yordam bera olasizmi?",
      answer:
        "Ha, biz sizga talabalar vizasini olish uchun barcha zarur hujjatlarni tayyorlashda yordam beramiz. Viza olish jarayonida ko'maklashish ham bizning xizmatlarimiz qatoriga kiradi.",
    },
    {
      id: 6,
      question: "O'qish va yashash xarajatlari haqida ma'lumot bera olasizmi?",
      answer:
        "Yaponiyadagi o'qish va yashash xarajatlari universitet yoki til maktabi joylashgan shaharga qarab farq qiladi. O'rtacha hisobda, o'qish uchun yillik to'lov 5,000-10,000 AQSh dollari orasida, yashash xarajatlari esa oyiga 800-1,500 AQSh dollari bo'lishi mumkin. Biz sizga qo'shimcha ma'lumot va arzonroq variantlar bo'yicha maslahat bera olamiz.",
    },
  ],
  en: [
    {
      id: 1,
      question: "Can I start learning Japanese from scratch?",
      answer:
        "Yes, of course! Our courses are designed for beginners. Students starting from scratch will learn the basics of the Japanese language and later move on to advanced lessons to further develop their skills.",
    },
    {
      id: 2,
      question: "What requirements do I need to meet to study in Japan?",
      answer:
        "Typically, Japanese universities require language proficiency (JLPT certificate), a high school or bachelor's diploma, and in some cases, IELTS or TOEFL test results. We will prepare you for this process.",
    },
    {
      id: 3,
      question:
        "Through which programs do you send students to study in Japan?",
      answer:
        "We have partnerships with universities, language schools, and scholarship programs in Japan. Students can choose programs that match their interests, and we support them through all stages, from submitting documents to acceptance.",
    },
    {
      id: 4,
      question: "How long does it take to learn Japanese?",
      answer:
        "It depends on your abilities and the time you can dedicate to studying. Typically, it takes 1-2 years to reach an intermediate conversational level from beginner. We offer intensive and regular courses that can be tailored to your schedule.",
    },
    {
      id: 5,
      question: "Can you help with obtaining a visa to study in Japan?",
      answer:
        "Yes, we will help you prepare all the necessary documents for obtaining a student visa. Assistance with the visa application process is also part of our services.",
    },
    {
      id: 6,
      question: "Can you provide information on study and living expenses?",
      answer:
        "Study and living expenses in Japan vary depending on the city where the university or language school is located. On average, tuition fees range from 5,000 to 10,000 USD per year, and living expenses can be between 800 and 1,500 USD per month. We can provide additional information and advice on more affordable options.",
    },
  ],
  ru: [
    {
      id: 1,
      question: "Могу ли я начать учить японский язык с нуля?",
      answer:
        "Да, конечно! Наши курсы адаптированы для начинающих. Студенты, начинающие с нуля, изучают основы японского языка и затем переходят к углубленным занятиям для дальнейшего развития языка.",
    },
    {
      id: 2,
      question: "Какие требования необходимо выполнить для учебы в Японии?",
      answer:
        "Обычно японские университеты требуют знание языка (сертификат JLPT), диплом средней школы или бакалавра, а в некоторых случаях результаты языковых тестов, таких как IELTS или TOEFL. Мы подготовим вас к этому процессу.",
    },
    {
      id: 3,
      question: "Через какие программы вы отправляете учиться в Японию?",
      answer:
        "У нас есть сотрудничество с университетами, языковыми школами и стипендиальными программами в Японии. Студенты могут выбирать программы, которые соответствуют их интересам, и мы поддерживаем их на всех этапах, от подачи документов до зачисления.",
    },
    {
      id: 4,
      question: "Сколько времени займет изучение японского языка?",
      answer:
        "Это зависит от ваших способностей и времени, которое вы сможете посвятить учебе. Обычно для достижения среднего уровня разговорного языка требуется 1-2 года. У нас есть интенсивные и обычные занятия, которые можно адаптировать под ваш график.",
    },
    {
      id: 5,
      question: "Можете ли вы помочь с получением визы для учебы в Японии?",
      answer:
        "Да, мы поможем вам подготовить все необходимые документы для получения студенческой визы. Помощь в процессе получения визы также входит в наши услуги.",
    },
    {
      id: 6,
      question:
        "Можете ли вы предоставить информацию о стоимости учебы и проживания?",
      answer:
        "Стоимость учебы и проживания в Японии зависит от города, где расположен университет или языковая школа. В среднем, годовая плата за обучение составляет от 5 000 до 10 000 долларов США, а расходы на проживание могут составлять от 800 до 1 500 долларов США в месяц. Мы можем предоставить дополнительную информацию и советы по более доступным вариантам.",
    },
  ],
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { i18n } = useTranslation();
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-content">
          <div className="title">Ko’p beriladigan savollar</div>
          <div className="faq-accardions">
            {i18n?.language == "en"
              ? answerFaq?.en?.map((item: AnswerFaq, index: number) => {
                  return (
                    <div className="faq-accardion" key={index}>
                      <div
                        className="faq-accardion-header"
                        onClick={() => toggleOpen(index)}
                      >
                        <p>{item.question}</p>
                        <div
                          className={`plus ${
                            openIndex == index ? "active" : ""
                          }`}
                          onClick={() => toggleOpen(index)}
                        >
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17.5"
                              fill="#5FACA9"
                            />
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
                      <div
                        className={`faq-accardion-body ${
                          openIndex == index ? "show" : ""
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })
              : i18n?.language == "ru"
              ? answerFaq?.ru?.map((item: AnswerFaq, index: number) => {
                  return (
                    <div className="faq-accardion" key={index}>
                      <div
                        className="faq-accardion-header"
                        onClick={() => toggleOpen(index)}
                      >
                        <p>{item.question}</p>
                        <div
                          className={`plus ${
                            openIndex == index ? "active" : ""
                          }`}
                          onClick={() => toggleOpen(index)}
                        >
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17.5"
                              fill="#5FACA9"
                            />
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
                      <div
                        className={`faq-accardion-body ${
                          openIndex == index ? "show" : ""
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })
              : answerFaq?.uz?.map((item: AnswerFaq, index: number) => {
                  return (
                    <div className="faq-accardion" key={index}>
                      <div
                        className="faq-accardion-header"
                        onClick={() => toggleOpen(index)}
                      >
                        <p>{item.question}</p>
                        <div
                          className={`plus ${
                            openIndex == index ? "active" : ""
                          }`}
                          onClick={() => toggleOpen(index)}
                        >
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="17.5"
                              cy="17.5"
                              r="17.5"
                              fill="#5FACA9"
                            />
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
                      <div
                        className={`faq-accardion-body ${
                          openIndex == index ? "show" : ""
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
