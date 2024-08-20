import { useState } from "react";

interface AnswerFaq{
  id: number,
  question: string,
  answer: string
}


const answerFaq: AnswerFaq[] = [
  {
    id: 1,
    question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo dolorem sapiente iste dignissimos ullam voluptas dicta. Iure corporis asperiores sapiente deserunt molestias dolorum, sequi magni modi architecto voluptatibus!"
  },
  {
    id: 2,
    question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo dolorem sapiente iste dignissimos ullam voluptas dicta. Iure corporis asperiores sapiente deserunt molestias dolorum, sequi magni modi architecto voluptatibus!"
  },
  {
    id: 3,
    question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo dolorem sapiente iste dignissimos ullam voluptas dicta. Iure corporis asperiores sapiente deserunt molestias dolorum, sequi magni modi architecto voluptatibus!"
  },
  {
    id: 4,
    question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo dolorem sapiente iste dignissimos ullam voluptas dicta. Iure corporis asperiores sapiente deserunt molestias dolorum, sequi magni modi architecto voluptatibus!"
  },
  {
    id: 5,
    question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia explicabo dolorem sapiente iste dignissimos ullam voluptas dicta. Iure corporis asperiores sapiente deserunt molestias dolorum, sequi magni modi architecto voluptatibus!"
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
                return <div className="faq-accardion">
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
