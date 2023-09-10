import React from 'react';
import "./inputs.css";

const Inputs = () => {
  return (
    <div  className='inputsContainer'>
        <div className='firstStepContainer'>
            <input type='text' placeholder='5' />
            
            <input type='text' placeholder='15' />
            
            <input type='text' placeholder='45' />
            
            <div className='forthContainerInput'>
                <input type='text' placeholder='50' />
            
                <input type='text' placeholder='50' />
            </div>
            <button className='plusButton'>+</button>
            
        </div>
        <div className='secondStepContainer'>
           <input type='text' placeholder='Question' />
           <input type='text' placeholder='Answer' />
           <input type='text' placeholder='image' />
           <button>Add</button>
        </div>
        <div className='forCopiing'>

        </div>
        <div className='forButton'>
            <button>Clear</button>
        </div>
    </div>
  )
}

export default Inputs