import { english } from "../englishData";
import { GitArray } from "../gitData";
import { JavaScript } from "../JSData";
import { reactArray } from "../reactData";

const  shuffleArray = (arr)=> {
    const shuffledArray = [...arr]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
  
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
    };

 const firstStep = [
    ...english,
    ...GitArray,
    ...JavaScript,
    ...reactArray];

export const allTogether = shuffleArray(firstStep);    