import React from 'react';
import { Link } from "react-router-dom"
import "./header.css";

const EveryHead = ({data}) => {
   

  return (
    <Link to={data.url} className='frontDivs' style={{backgroundImage: data.image}}>
        <div className='SeeIfIs'>1</div>

    </Link>
  )
}

export default EveryHead