import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import "./inputs.css";
import { firstStep,copyQuestion } from '../../../ReduxStore/Slices/inputSlice';
import { setSteps } from '../../../ReduxStore/Slices/platformSlice';
import { exempleArray } from '../../../data/platformExemple';
const Inputs = ({title}) => {
  const dispatcher = useDispatch();
  const { SP1,SP2,SP3,VA1,VA2,VA3,realArray,stepNow,tryNow,questionNow
  } = useSelector((state)=>state.platSlice);
  



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
      id:exempleArray.length + 1,
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
            <input  type='text' placeholder={SP1} name='first' />
            
            <input type='text' placeholder={SP2} name='second' />
            
            <input type='text' placeholder={SP3} name='third' />
            
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
            // JSON.stringify(questionsCopy)
          }

        </div>
        <div className='forButton'>
            <button>Clear</button>
        </div>
    </div>
  )
}

export default Inputs