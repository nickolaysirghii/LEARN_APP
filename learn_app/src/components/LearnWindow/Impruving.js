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
        <div className='rawToSee'>
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
        <input className='inputOne' type='text' placeholder='Hallo'></input>
        <div className='belawInput1'>
          <div className='butt1'>input</div>
          <div className='butt1'>first step</div>
          <div className='butt1'>second step</div>
          <div className='butt1'>third step</div>
          <div className='butt1'>forthStep step</div>
          <div className='butt1'>shaffle</div>
        </div>
        <div className='belawInput2'>
          <div className='firstStep'>
            <input type='text' placeholder='5' />
            <p>First step : 5</p>
          </div>
          <div className='secondStep'>
          <input type='text' placeholder='15' />
            <p>Second step : 15</p>
          </div>
          <div className='thirdStep'>
          <input type='text' placeholder='45' />
            <p>Third step : 45</p>
          </div>
          <div className='forthStep'>
               <div className='forth11'>
                   <input type='text' placeholder='45' />
                     <p>Forth step : 45</p>
               </div>
               <div className='forth11'>
                   <input type='text' placeholder='45' />
                      <p>the rest : 45</p>
                      <div className='changerrr'>ok</div>
               </div>
          </div>

        </div>

    </div>
  )
}

export default Impruving