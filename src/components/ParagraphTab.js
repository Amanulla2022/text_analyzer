import React, { useState } from "react";

const ParagraphTab = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charactersCount, setCharacterCount] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [spaces, setSpaces] = useState(0);
  const [punctuations, setPunctuations] = useState(0);

  const handleChange = (e) => {
    const input = e.target.value;

    setText(input);

    setCharacterCount(input.length);

    const words = input
      .trim()
      .split(" ")
      .filter((word) => word !== "");
    setWordCount(words.length);

    const sentenceSeparators = [".", "!", "?"];
    let sentencesCount = 0;
    let prevCharWasSeparator = true;
    for (let i = 0; i < input.length; i++) {
      if (sentenceSeparators.includes(input[i])) {
        if (!prevCharWasSeparator) {
          sentencesCount++;
          prevCharWasSeparator = true;
        }
      } else {
        prevCharWasSeparator = false;
      }
    }
    setSentences(sentencesCount);

    const paragraphsCount = input
      .split("\n\n")
      .filter((paragraph) => paragraph.trim() !== "").length;
    setParagraph(paragraphsCount);

    const spaceCount = input.split(" ").length - 1;
    setSpaces(spaceCount);

    const punctuations = [
      ".",
      ",",
      "/",
      "#",
      "!",
      "$",
      "%",
      "^",
      "&",
      "*",
      ";",
      ":",
      "{",
      "}",
      "=",
      "-",
      "_",
      "`",
      "~",
      "(",
      ")",
    ];
    const punctuationCount = input.split("").reduce((count, char) => {
      if (punctuations.includes(char)) {
        return count + 1;
      }
      return count;
    }, 0);
    setPunctuations(punctuationCount);
  };
  return (
    <div className="mt-4 flex flex-col gap-4">
      <textarea
        className="border w-full h-60 resize-none p-2"
        placeholder="Type or copy/paste content here..."
        onChange={handleChange}
      ></textarea>
      <div>
        <table className="border border-gray-400 w-full ">
          <tbody className="flex w-full flex-col md:flex-row">
            <tr className="table-row">
              <th className="table-heading ">Characters</th>
              <td className="table-data">{charactersCount}</td>
            </tr>

            <tr className="table-row">
              <th className="table-heading">Words</th>
              <td className="table-data">{wordCount}</td>
            </tr>
            <tr className="table-row">
              <th className="table-heading">Sentences</th>
              <td className="table-data">{sentences}</td>
            </tr>
            <tr className="table-row">
              <th className="table-heading">Paragraphs</th>
              <td className="table-data">{paragraph}</td>
            </tr>
            <tr className="table-row">
              <th className="table-heading">Spaces</th>
              <td className="table-data">{spaces}</td>
            </tr>
            <tr className="table-row">
              <th className="table-heading">Punctuations</th>
              <td className="table-data">{punctuations}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParagraphTab;
