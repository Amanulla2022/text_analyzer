import React, { useState } from "react";

const WordTab = () => {
  const [word, setWord] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

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
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col md:flex-row gap-4 ">
        <input
          type="text"
          className="p-2 border w-full md:w-5/6"
          placeholder="Type a word..."
          onChange={debounceHandleChange}
        />
        <button className="text-white w-2/5 md:w-auto bg-purple-600 p-2">
          Process Word
        </button>
      </div>
      <div className="md:w-2/5">
        <table className="border border-gray-400 w-full">
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
      <div className="border flex flex-col gap-4 p-4">
        <p className="flex gap-12 items-center">
          <span className=" text-gray-500">Definition:</span>
          <span className="font-semibold w-1/4">
            Dummy Text htrrr fessssv gdsss vfsa gfdsgf grgregr vcgerrge
          </span>
        </p>
        <p className="flex gap-2">
          <span className=" text-gray-500">Parts of Speech:</span>
          <span className="font-semibold w-1/4">Dummy Text</span>
        </p>
        <p className="flex gap-12">
          <span className=" text-gray-500">Synonyms:</span>
          <span className="font-semibold w-1/4">Dummy Text</span>
        </p>
        <p className="flex gap-12">
          <span className=" text-gray-500">Antonyms:</span>
          <span className="font-semibold w-1/4">Dummy Text</span>
        </p>
      </div>
    </div>
  );
};

export default WordTab;
