import React from 'react';
import Platform from '../Platform/Platform';
import { exempleArray } from '../../data/platformExemple';
import { useSelector } from 'react-redux';

const Sql = () => {
  const {SQL} = useSelector((state)=>state.calculate)
  return (
    <Platform title="SQL" data={exempleArray} slice={SQL}/>
  )
}

export default Sql