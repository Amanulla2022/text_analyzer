// apiCall
import { axios } from "axios";

export const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = response.data;

    const firstMeaning = data[0];
    const wordDetails = {
      partOfSpeech: firstMeaning.meanings[0].partOfSpeech,
      definition: firstMeaning.meanings[0].definitions[0].definition,
    };

    console.log(wordDetails);
    return wordDetails;
  } catch (error) {
    console.log("Error while fetching data:", error);
    return null;
  } finally {
    console.log("fetched the data");
  }
};
