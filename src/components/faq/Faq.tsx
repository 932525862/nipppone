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
      question: "Yapon tilini bilmasdan yaponiyaga til kurslariga ketaolamanmi?",
      answer:
        "Aslida ketsangiz bo'ladi lekin buni tafsiya qilmaymiz, sababi yaponiyada yashash, til maktablari darsl;ariga moslasholmaslik, ishlay olamslik, quydagi muammolarni keltirib chiqaradi, tafsiya, Hujjat topshirgan kunizdan boshlab yapon tilini boshlashiz kerak.",
    },
    {
      id: 2,
      question:
        "Yaponiyadagi til maktablariga viza olib berish kafolatlariz qanaqa?",
      answer:
        "Bizada 2 hil xizmatimzi mavjuda, 1: 100% kafolatli viza olib berish, 2: 80% dan 90% gacha viza chiqish ehtimoli. ",
    },
    {
      id: 3,
      question: "Sizlar yani Nippon Study Center qachondan faoliyat yuritib kelasizlar?",
      answer:
        "Biz 2017-yil dekabr oyidan buyon faoliyatdamiz. Hozirda 500dan ortiq talabalarimiz Yaponiyaning nufuzli universitet va kollejlarida tahsil olib kelyapti.",
    },
    {
      id: 4,
      question: "Men boshqa viloyatdanman. Borib maslahat olish va hujjat topshirishimga uzoqlik qilyapti. Hujjat va Maslahatlarni online qilsak bo'ladimi?",
      answer:
        "Ha, albatta ilojisi bor. Bizni asosiy filialimiz Qashqadaryoning Shahrisabz shahrida joylashgan. Agar sizga uzoqlik qisla biz bn online shartnoma va hujjat ishlari va maslahatlarni olishingiz mumkun. Hozirgacha Samarqand, Jizzax, Andijon. Namangan, Farg'ona, Horazmlardan online shartnoma qilib ketganlar juda kop.",
    },
    {
      id: 5,
      question:
        "Man hohlagan Yaponiyaning shaharlariga hujjatimni tahlab beraolasizlarmi?",
      answer:
        "Ha, albatta. Siz hohlagan Yaponiyaning shariga qilib beraolamiz. Sababi biz hozirda Yaponiyaning deyarli barcha viloyatlari ilan shartnomalarimiz bor.",
    },
    {
      id: 6,
      question: "Yaponiyadagi o'qish tulovlari man uchun ozgina qimmatlik qilyapti. Bo'lib tulashni yani hech bo'lmaganda ikkiga bo'lib to'lasam bo'ladimi?",
      answer:
        "Ha, bizda huddi shunday imkoniyat bor. 1 yillik o'qish pulini 6oylik qismini to'lab ketaolasiz va yaponiyadagi oq;ishni boshlaysiz, 6oy yapon tilini oq'ib bo'lganizdan keyin qolgan 6oylgizni uziz ishlab topgan pulzidan bemalol to'layolasiz.",
    },
    {
      id: 7,
      question: "Yaponiyaga til maktablari yoki universitetlarga tekinga ketishni ilojisi bormi?",
      answer:
        "Afsuski yo'q.",
    },
    {
      id: 8,
      question: "Sizlarda offline o'qish qnarxi qancha?",
      answer:
        "500,000 so'm.",
    },
    {
      id: 9,
      question: "Turist viza bilan ketmoqchiman?",
      answer:
        "Hujjat tahlashda yordam beramiz albatta. Bizda shu xizmatlar ham bor. Atiga 2milion so'm.",
    },
    {
      id: 10,
      question: "Nima uchun o'qish vizasiga 100% kafolat beryapsizlar, bu qanchalik haqiqatga yaqin?",
      answer:
        "Biz 2017-yildan buyon ishlab ishlab kelyapmiz. Bu degani bizda boshqalarda yo'q tajribalar bor. Aslida bu 100% lik kafolatli vizani olish uchun bir qancha sabablari bor, 1. Hujjatlarni to'gri tayyorlash. 2. Yolg'on malumot yoki Qalbaki ho'jjatlarni bermaslik, 3. Yaponiya migratsiyasi tomonidan ''ajoyib maktab'' maqomiga ega bo'lgan maktab tallashiz kerak holos. Shunda siz vizani 100% muammosiz olasiz.",
    },
  ],
  en: [
    {
      id: 1,
      question: "Can I go to language courses in Japan without knowing Japanese?",
      answer:
        "Actually, you can, but we do not recommend it, because it can cause difficulties in adapting to life in Japan, attending classes in language schools, and working. We recommend that you start learning Japanese as soon as you submit your documents.",
    },
    {
      id: 2,
      question: "What are your guarantees for obtaining a visa to language schools in Japan?",
      answer:
        "We have two types of services: 1. 100% guarantee of obtaining a visa, 2. 80% to 90% probability of getting a visa.",
    },
    {
      id: 3,
      question: "Since when have you been operating Nippon Study Center?",
      answer:
        "We have been operating since December 2017. Currently, more than 500 of our students are studying at prestigious universities and colleges in Japan.",
    },
    {
      id: 4,
      question: "I am from another region. It's hard for me to come for consultation and document submission. Can we do everything online?",
      answer:
        "Yes, of course. Our main branch is located in Shahrisabz, Kashkadarya region. If it's too far for you, you can make an online contract and submit documents. Many students from Samarkand, Jizzakh, Andijan, Namangan, Fergana, and Khorezm have already done this online.",
    },
    {
      id: 5,
      question: "Can you submit my documents to any city in Japan that I want?",
      answer:
        "Yes, of course. We can submit your documents to any city in Japan as we currently have contracts with almost all regions of Japan.",
    },
    {
      id: 6,
      question: "Studying in Japan is a bit expensive for me. Can I pay in installments, at least in two parts?",
      answer:
        "Yes, we have such an option. You can pay only half of the tuition fee for the first year and start studying in Japan. After studying for 6 months, you can easily pay the remaining amount with the money you earn yourself.",
    },
    {
      id: 7,
      question: "Is it possible to study for free at language schools or universities in Japan?",
      answer: "Unfortunately, no.",
    },
    {
      id: 8,
      question: "How much does your offline course cost?",
      answer: "500,000 sum.",
    },
    {
      id: 9,
      question: "I want to travel with a tourist visa, what can you offer?",
      answer:
        "We can help you with document preparation. We have this service available. The cost is only 2 million sum.",
    },
    {
      id: 10,
      question: "Why are you giving a 100% guarantee on a student visa, how realistic is that?",
      answer:
        "We have been working since 2017, which means we have experience that others don't. In fact, there are several reasons to get a visa with 100% guarantee: 1. Proper document preparation. 2. No false information or forged documents. 3. Choosing a school that has been awarded the 'excellent school' status by Japanese immigration. If you meet these conditions, you will get the visa without any problems.",
    },
  ],
  ru: [
    {
      id: 1,
      question: "Можно ли поехать на языковые курсы в Японию без знания японского языка?",
      answer:
        "На самом деле можно, но мы этого не рекомендуем, потому что это может вызвать трудности с адаптацией к жизни в Японии, посещением уроков в языковых школах и работой. Мы рекомендуем начать изучать японский язык с момента подачи документов.",
    },
    {
      id: 2,
      question: "Какие гарантии получения визы в японские языковые школы?",
      answer:
        "У нас есть два вида услуг: 1. 100% гарантия получения визы, 2. Вероятность получения визы от 80% до 90%.",
    },
    {
      id: 3,
      question: "С какого времени работает Nippon Study Center?",
      answer:
        "Мы начали свою деятельность в декабре 2017 года. В настоящее время более 500 наших студентов обучаются в престижных университетах и колледжах Японии.",
    },
    {
      id: 4,
      question: "Я из другого региона. Мне неудобно приезжать для консультации и подачи документов. Можно ли все сделать онлайн?",
      answer:
        "Да, конечно. Наш главный филиал находится в городе Шахрисабз, Кашкадарьинской области. Если для вас это далеко, вы можете заключить договор и подать документы онлайн. Уже много студентов из Самарканда, Джизака, Андижана, Намангана, Ферганы и Хорезма сделали это онлайн.",
    },
    {
      id: 5,
      question: "Можете ли вы подать мои документы в город Японии по моему выбору?",
      answer:
        "Да, конечно. Мы можем подать ваши документы в любой город Японии, так как у нас есть контракты с почти всеми регионами Японии.",
    },
    {
      id: 6,
      question: "Учеба в Японии для меня немного дороговата. Можно ли оплатить в рассрочку, например, хотя бы в два этапа?",
      answer:
        "Да, у нас есть такая возможность. Вы можете оплатить за первый год учебы только половину суммы и начать учиться в Японии, а вторую половину вы сможете оплатить после того, как проучитесь 6 месяцев и заработаете эти деньги самостоятельно.",
    },
    {
      id: 7,
      question: "Есть ли возможность бесплатно поехать учиться в Японию на языковые курсы или в университет?",
      answer: "К сожалению, нет.",
    },
    {
      id: 8,
      question: "Сколько стоит офлайн обучение у вас?",
      answer: "500 000 сум.",
    },
    {
      id: 9,
      question: "Хочу поехать с туристической визой, что можете предложить?",
      answer: "Мы можем помочь вам с оформлением документов. У нас есть такая услуга. Стоимость всего 2 миллиона сум.",
    },
    {
      id: 10,
      question: "Почему вы даете 100% гарантию на учебную визу? Насколько это реально?",
      answer:
        "Мы работаем с 2017 года, что означает, что у нас есть уникальный опыт, которого нет у других. Чтобы получить визу с 100% гарантией, есть несколько причин: 1. Правильная подготовка документов. 2. Отсутствие ложной информации или поддельных документов. 3. Выбор школы, имеющей статус «отличной школы» от японской миграции. Если вы выполните эти условия, то получите визу без проблем.",
    },
  ],
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { i18n, t } = useTranslation();
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-content">
          <div className="title">{t("header.faq")}</div>
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
