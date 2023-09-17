import React  from 'react';
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import "./inputs.css";
import { setSteps,setrrr } from '../../../ReduxStore/Slices/platformSlice';
import { setInputsData } from '../../../ReduxStore/Slices/platformSlice';


const Inputs = ({title , data}) => {
  const dispatcher = useDispatch();
  const { inputCount,inputsData,SP1,SP2,SP3} = useSelector((state)=>state.platSlice);
  useState(()=>{
    let ccount1 = 0;
    let ccount2 = 0;
    let ccount3 = 0;
    data.forEach((elem)=>{
      if(elem.addingId === data[0].addingId){ccount1 +=1;}});
      data.forEach((elem)=>{
      if(elem.addingId === data[ccount1].addingId)ccount2 += 1;});
      data.forEach((elem)=>{
      if(elem.addingId === data[ccount1+ccount2].addingId)ccount3 += 1;});
    const data333 = {
      forSet:data,
      one:ccount1,
      two:ccount2,
      three:ccount3
    }
    dispatcher(setrrr(data333))
      },[])



  const sendSteps = (e)=>{
e.preventDefault();
    const { first ,second , third }= e.target
    const data = {
      one: first.value,
      two: second.value,
      three: third.value,
    }
    dispatcher(setSteps(data))
   e.target.reset()
  }
  const setNewQuestion = (e)=>{
    e.preventDefault();
    
    const {question, answer, image1} = e.target;
    const data444 = {
      id:inputCount + 1,
      addingId: data[0].addingId + 1,
      dataToday: Date().slice(0,24),
      title,
      question: question.value,
      answer: answer.value,
      ourAnswer: "",
      fakeAnswer: "",
      image: `url(${image1.value})`
    }
    dispatcher(setInputsData(data444))
    e.target.reset();
  }
  
  return (
    <div  className='inputsContainer'>
        <form onSubmit={sendSteps} className='firstStepContainer'>
            <input  type='text' placeholder={SP1} name='first' />
            
            <input type='text' placeholder={SP2} name='second' />
            
            <input type='text' placeholder={SP3} name='third' />
            
            <button  className='plusButton'>{data.length}</button>
            
        </form>
        <form onSubmit={setNewQuestion} className='secondStepContainer'>
           <input type='text' placeholder='Question' name='question' />
           <input type='text' placeholder='Answer'  name='answer'/>
           <input type='text' placeholder='image' name='image1'/>
           <button>Add</button>
        </form>
        <div className='forCopiing'>
          {
            JSON.stringify(inputsData)
          }

        </div>
        <div className='forButton'>
            <button onClick={()=>{console.log(inputsData)}}>console.log(data)</button>
        </div>
    </div>
  )
}

export default Inputs