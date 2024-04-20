import React, { useState } from "react";
import { fetchWordDetails } from "./../apiCall";

const WordTab = () => {
  const [word, setWord] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [details, setDetails] = useState(null);

  //   handle on change
  const handleChange = (e) => {
    const input = e.target.value;

    setWord(input);

    setCharacterCount(input.length);

    const words = input
      .trim()
      .split(" ")
      .filter((word) => word !== "");
    setWordCount(words.length);
  };

  //   debounce
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debounceHandleChange = debounce(handleChange, 500);

  const fetchData = async () => {
    const data = await fetchWordDetails(word);
    setDetails(data);
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col md:flex-row gap-4 ">
        <input
          type="text"
          className="p-2 border border-[#D7DBDF] w-full md:w-5/6 bg-[#FCFCFD]"
          placeholder="Type a word..."
          onChange={debounceHandleChange}
        />
        <button
          className="text-white w-2/5 md:w-auto bg-[#731EE2] p-2"
          onClick={fetchData}
        >
          Process Word
        </button>
      </div>
      <div className="md:w-2/5">
        <table className="border border-[#F4F4F6] w-full">
          <tbody className="flex w-full flex-col md:flex-row">
            <tr className="table-row">
              <th className="table-heading ">Characters</th>
              <td className="table-data">{characterCount}</td>
            </tr>
            <tr className="table-row">
              <th className="table-heading">Words</th>
              <td className="table-data">{wordCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border border-[#D6DADF] flex flex-col gap-4 p-4">
        <p className="flex gap-12 items-center">
          <span className="font-semibold text-[#566375]">Definition:</span>

          {details ? (
            <span className="font-semibold md:w-1/4 w-full">
              {details.definition}
            </span>
          ) : (
            <span className="font-semibold w-1/4">-</span>
          )}
        </p>
        <p className="flex gap-2">
          <span className="font-semibold text-[#566375]">Parts of Speech:</span>
          {details ? (
            <span className="font-semibold w-1/4">{details.partOfSpeech}</span>
          ) : (
            <span className="font-semibold w-1/4">-</span>
          )}
        </p>
        <p className="flex gap-12">
          <span className="font-semibold text-[#566375]">Synonyms:</span>
          <span className="font-semibold w-1/4">-</span>
        </p>
        <p className="flex gap-12">
          <span className="font-semibold text-[#566375]">Antonyms:</span>
          <span className="font-semibold w-1/4">-</span>
        </p>
      </div>
    </div>
  );
};

export default WordTab;
