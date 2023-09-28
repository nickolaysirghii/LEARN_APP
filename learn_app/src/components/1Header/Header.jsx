import React  from 'react';
import "./header.css";
import { spean } from '../../ReduxStore/Slices/animationSlice';
import { useSelector , useDispatch } from 'react-redux';
import { headFront } from '../../data/header_frnt';
import EveryHead from './EveryHead';

const Header = () => {

   const { position } = useSelector((state)=>state.transform);
    const dispatcher = useDispatch();

    const rotateAround = (e)=>{
        e.preventDefault();
        dispatcher(spean(e.target.className))
    }
  return (
    <div  className='heaaderContainer'>
        <div className='hedHome'></div>
        <div className='A_3D_container'>
            <div className='rotateDiv'
                 style={{transform: `rotateX(${position}deg)`}}
        >
            <div className='celing'>top</div>
            <div className='bottom'>bottom</div>
            <div className='front'>
                {
                    headFront.map((elem,idx)=>{
                        return (
                            <EveryHead  key={idx} data={elem} />
                        )
                    })
                }
            </div>
            <div className='back'>back</div>
        </div>
        </div>
        <div onClick={rotateAround} className='directionRotate'>
            <div className='rotateUp'></div>
            <div className='rotateDown'></div>
        </div>

    </div>
  )
}

export default Header