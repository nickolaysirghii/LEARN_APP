import React  from 'react';
import "./header.css";
import { spean } from '../../ReduxStore/Slices/animationSlice';
import { useSelector , useDispatch } from 'react-redux';
import { headFront } from '../../data/header_frnt';
import { Link } from 'react-router-dom';

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
                            <Link to={elem.url} key={idx}  className='frontDivs' 
                            style={{backgroundImage: elem.image}}
                            />
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