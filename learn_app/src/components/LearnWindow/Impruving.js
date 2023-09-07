import React from 'react';
import "./impruving.css";


const Impruving = () => {
  return (
    <div className='ImpContainer'>
        <div className='head1'>
          <div className='startButton'>START</div>
          <div className='betweenStart'>
            <div className='leftSpent'>
              <p className='spentTottal'>Days:
              <span>0</span>
              </p>
              <p className='spentTottal'>Hours:
              <span>0 ,</span><span>0 ,</span><span>0</span>
              </p>
            </div>
            <div className='Title'>Title</div>
            <div className='rightSpent'>Mintes now:
            <span>200</span>
            </div>
            </div>
          <div className='doneButton'>DONE</div>
        </div>
        <div className='progress'>
          <div className='daysInRaw'>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
          </div>
          <div className='typeInfo'>
             <div className='typeTotal'>Type Total:
             <span>100</span>
             </div>
             <div className='totlaCorrect'>
                 <div className='totalOk'>Correct: <span>100</span></div>
                 <div className='totalNotOk'>Not correct: <span>100</span></div>
             </div>
             <div className='correctNow'>
                 <div className='nowOk'>Correct: <span>200</span> </div>
                 <div className='typedNot'>Not correct: <span>100</span> </div>
             </div>
             <div className='typeNow'>Type Now:
             <span>200</span>
             </div>
          </div>
        </div>
        <div className='questionInfo'>
            <div className='questionImage'></div>
            <div className='question'>
              <p className='correct'>
             Here will be the question ,
            that we will need to answer , and to see if it is correct,
            and I think it will be correct , no mater what I will do. Becaue  it is like this!
              </p>
              <p className='ourAnswer'>
              Here will be the question ,
            that we will need to answer , and to see if it is correct,
            and I think it will be correct , no mater what I will do. Becaue  it is like this!
              </p>
            </div>
        </div>
        <input className='inputOne' type='text' placeholder='Hallo'></input>
    </div>
  )
}

export default Impruving