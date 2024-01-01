import { faqs } from "./data/faqs";
import star from "./assets/images/icon-star.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import { useState } from "react";

function App() {
  const [faqList, setFaqList] = useState(faqs);

  const handleToggle = (index) => {
    setFaqList((prevFaqList) =>
      prevFaqList.map((faq, faqIndex) =>
        index === faqIndex ? { ...faq, isActive: !faq.isActive } : faq
      )
    );
  };

  return (
    <div className="wrap__container">
      <main className="w-[clamp(30rem,90%,50rem)] bg-white relative z-50 p-10 md:p-14 rounded-xl">
        <div className="flex items-center gap-4 mb-2">
          <img src={star} alt="star" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-5xl md:text-6xl font-bold text-dark-purple">
            FAQs
          </h1>
        </div>
        <div>
          {faqList.map(({ title, text, isActive }, i) => (
            <div key={i} className="border-b py-6 flex flex-col gap-6">
              <p
                className="flex items-center justify-between gap-6 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <span className="text-dark-purple text-2xl font-semibold hover:cursor-pointer hover:text-hover-pink">
                  {title}
                </span>
                <img src={isActive ? minus : plus} alt="" />
              </p>
              {isActive && (
                <p className="text-xl text-grayish-purple font-semibold">
                  {text}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
