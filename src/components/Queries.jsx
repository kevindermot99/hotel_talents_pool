import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Queries() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleAnswer2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  const GettingStarted = [
    {
      question: "What is Countify?",
      answer:
        "Countify is a free tool that helps you count words, characters, lines, sentences, and whitespaces in your text and PDFs quickly and accurately.",
    },
    {
      question: "How do I use Countify?",
      answer:
        "Simply copy and paste your text into the textbox or upload a PDF, and Countify will instantly provide you with detailed counts of words, characters, lines, sentences, and whitespaces.",
    },
    {
      question: "Is Countify really free?",
      answer:
        "Yes, Countify is completely free to use. There are no hidden fees or subscription costs.",
    },
    {
      question: "Can I save my counting history?",
      answer:
        "Yes, Countify automatically saves your counting history, so you can easily revisit and access your past counts whenever you need them.",
    },
    {
      question: "What types of documents can I analyze?",
      answer:
        "You can analyze plain text, paragraphs, and PDFs using Countify. Simply paste your text or upload your PDF to get started.",
    },
  ];
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text">
      <div className="w-full h-fit grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-3">
        <h1 className="text-3xl font-medium ">Frenquenlty asked questions</h1>
        <h1 className="text-sm text-dark-text/70 flex gap-4 flex-col">
          <span>
            If your question was not answered, feel free to ask via t a survey
            form
          </span>
          <span>
            <Link
              className="text-sm min-w-fit bg-card-bg text-dark-text/80 py-2 px-5 rounded-full mt-3 font-medium"
              to="/"
            >
              View Surevey
            </Link>
          </span>
        </h1>
      </div>
      {/* Questions grid */}
      <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 mt-10 max-lg:mt-5 gap-10 max-lg:gap-5 rounded-xl">
        <div className="group w-full h-fit flex flex-col p-5 gap-4 bg-card-bg rounded-2xl">
          <h1 className="text-xl font-medium tracking-tight">Get Started</h1>
          <div className="w-full h-fit flex flex-col items-center justify-start text-dark-text ">
            <div className="w-full h-fit flex flex-col items-center justify-start gap-2 max-w-[900px]">
              {GettingStarted.map((item, index) => (
                <div
                  key={index}
                  className=" py-4 px-5 bg-white text-dark-body-color rounded-xl w-full flex justify-between items-start gap-5"
                >
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-normal tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                      {item.question}
                    </h1>
                    <p
                      className={`text-sm text-black/50 leading-5 font-normal transition-all duration-500 ease-in-out overflow-hidden ${
                        activeIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-dark-text/50 hover:bg-card-bg hover:text-main-color flex items-center justify-center   "
                  >
                    <FaCaretDown className="text-[20px] " />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="group w-full h-fit flex flex-col p-5 gap-4 bg-card-bg rounded-2xl">
          <h1 className="text-xl font-medium tracking-tight">Get Started</h1>
          <div className="w-full h-fit flex flex-col items-center justify-start text-dark-text ">
            <div className="w-full h-fit flex flex-col items-center justify-start gap-2 max-w-[900px]">
              {GettingStarted.map((item, index) => (
                <div
                  key={index}
                  className=" py-4 px-5 bg-white text-dark-body-color rounded-xl w-full flex justify-between items-start gap-5"
                >
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-normal tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                      {item.question}
                    </h1>
                    <p
                      className={`text-sm text-black/50 leading-5 font-normal transition-all duration-500 ease-in-out overflow-hidden ${
                        activeIndex2 === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAnswer2(index)}
                    className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-dark-text/50 hover:bg-card-bg hover:text-main-color flex items-center justify-center   "
                  >
                    <FaCaretDown className="text-[20px] " />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Queries;
