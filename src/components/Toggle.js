import React, { useState } from "react";
import WordTab from "./WordTab";
import ParagraphTab from "./ParagraphTab";

const Toggle = () => {
  const [toggledElement, setToggledElement] = useState("wordInput");

  const toggleEffect = (element) => {
    setToggledElement(element);
  };
  return (
    <>
      <div className="bg-gray-100 flex justify-around w-full md:w-1/2 p-2 border mt-8">
        <button
          className={`w-1/2 py-2 duration-300 ${
            toggledElement === "wordInput"
              ? "bg-white border-2"
              : "text-gray-500"
          }`}
          onClick={() => toggleEffect("wordInput")}
        >
          Word Input
        </button>
        <button
          className={`w-1/2 py-2 duration-300  ${
            toggledElement === "paragraph"
              ? "bg-white border-2"
              : "text-gray-500 "
          }`}
          onClick={() => toggleEffect("paragraph")}
        >
          Paragraph
        </button>
      </div>
      {toggledElement === "wordInput" ? <WordTab /> : <ParagraphTab />}
    </>
  );
};

export default Toggle;
