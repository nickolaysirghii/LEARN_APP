import React from 'react';
import Platform from '../Platform/Platform';
import { english } from '../../data/englishData';
import { useSelector } from 'react-redux';

const Sql = () => {
  const {SQL} = useSelector((state)=>state.calculate)
  return (
    <Platform title="SQL" data={english} slice={SQL}/>
  )
}

export default Sql