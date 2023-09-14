import React from 'react';
import { useDispatch } from 'react-redux';
import "./inputs.css";
import { firstStep,copyQuestion } from '../../../ReduxStore/Slices/inputSlice';
import { setSteps } from '../../../ReduxStore/Slices/platformSlice';

const Inputs = ({arrayLength,title,step_1,step_2,step_3,step_4,step_5,questionsCopy}) => {
  const dispatcher = useDispatch();
  



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
    const data = {
      id:arrayLength + 1,
      dataToday: Date().slice(0,24),
      title,
      question: question.value,
      answer: answer.value,
      ourAnswer: "",
      image: `url(${image1.value})`
    }
    dispatcher(copyQuestion(data))
    e.target.reset();
  }
  return (
    <div  className='inputsContainer'>
        <form onSubmit={sendSteps} className='firstStepContainer'>
            <input  type='text' placeholder={step_1} name='first' />
            
            <input type='text' placeholder={step_2} name='second' />
            
            <input type='text' placeholder={step_3} name='third' />
            
            <button  className='plusButton'>+</button>
            
        </form>
        <form onSubmit={setNewQuestion} className='secondStepContainer'>
           <input type='text' placeholder='Question' name='question' />
           <input type='text' placeholder='Answer'  name='answer'/>
           <input type='text' placeholder='image' name='image1'/>
           <button>Add</button>
        </form>
        <div className='forCopiing'>
          {
            JSON.stringify(questionsCopy)
          }

        </div>
        <div className='forButton'>
            <button>Clear</button>
        </div>
    </div>
  )
}

export default Inputs