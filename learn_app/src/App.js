
import './App.css';
import Platform from './components/Platform/Platform';
import { useDispatch , useSelector } from 'react-redux';
import {setRA} from './ReduxStore/Slices/platformSlice';
import { exempleArray } from './data/platformExemple';

function App() {
  const  shuffleArray = (arr)=> {
    const shuffledArray = [...arr]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
  
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
    };
const dispathcher = useDispatch();
const { SP1,SP2,SP3,VA1,VA2,VA3,realArray,stepNow,tryNow,questionNow
   } = useSelector((state)=>state.platSlice);
 

  const keyIndex = (e)=>{
    e.preventDefault();
    if(e.code === "Enter"){
        // const secndStep = exempleArray.slice(0, step_2);
        // const secndRend = exempleArray.slice(step_2, exempleArray.length);
        // const thirdStep = exempleArray.slice(0, step_3);
        // const thirdRend = exempleArray.slice(step_3, exempleArray.length);
        // const data = {
        //   addVa:false,
        //   firstQuestion:false,
        //   setRA:false,

        // }
        if(stepNow === 1){
            const data = {
            setRa:true,
            data1: VA1[questionNow],
            data2: e.target.value
            
          }
          dispathcher(setRA(data))
           
              
        
            
        }
      }
  }
  
  return (
    <div onKeyUp={keyIndex} className="App">
     <Platform />
    </div>
  );
}

export default App;
