
import './App.css';
import English from './components/English/English';
import Header from './components/1Header/Header';
import { useDispatch , useSelector } from 'react-redux';
import {setRA} from './ReduxStore/Slices/platformSlice';
import { Routes , Route } from 'react-router-dom';
import { pagesData } from './routes';

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
const { VA1,realArray,stepNow,questionNow} = useSelector((state)=>state.platSlice);
  const keyIndex = (e)=>{
    e.preventDefault();
    if(e.code === "Backslash"){
      e.target.value = "";
      if(stepNow === 1 || stepNow === 2){
        const ggg = { wrong: 0}
        const data = [];
        realArray.forEach((elem)=>{
         if(elem.answer !== elem.ourAnswer){VA1.forEach((vaelem)=>{if(vaelem.id === elem.id){data.push(vaelem)}})
         if(elem.answer !== elem.ourAnswer){ ggg.wrong +=1;}
       
         }
        })
        if(data.length !== 0){
         const fff = shuffleArray(data)
         dispathcher(setRA({notClear:true, data1:fff , data2:ggg}))
        }else{
         dispathcher(setRA({allRight:true})); 
        }
      }else{
        const ggg = {  wrong: 0}
        const data = [];
        realArray.forEach((elem)=>{
         if(elem.answer !== elem.ourAnswer){VA1.forEach((vaelem)=>{if(vaelem.id === elem.id){data.push(vaelem)}})
         if(elem.answer !== elem.ourAnswer){ ggg.wrong +=1;}
         }
        })
        if(data.length !== 0){
          const fff = shuffleArray(data)
         dispathcher(setRA({notClear:true, data1:fff , data2:ggg}));
         }else{
          
          dispathcher(setRA({finish:true }))
         }
        }}
    if(e.code === "Enter"){
           if(questionNow  < VA1.length){
            const data = {
              setRa:true,
              data1: VA1[questionNow],
              data2: e.target.value
              }
            dispathcher(setRA(data));
           }else{
            dispathcher(setRA({lastQues:true , data1:e.target.value}));
           }
           e.target.value = "";
      }
  }
  
  return (
    <div onKeyUp={keyIndex} className="App">
      
      <Header />
      <Routes>
                  {
                    pagesData.map((elem,idx)=>{
                     return <Route key={idx} path={elem.path} Component={elem.element} />
                    })
                  }
      </Routes>
     </div>
  );
}

export default App;
