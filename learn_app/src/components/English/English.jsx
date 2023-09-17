import React from 'react';
import Platform from '../Platform/Platform';
import { exempleArray } from '../../data/platformExemple';
import { useSelector } from 'react-redux';

const English = () => {
  const {totalTime} = useSelector((state)=>state.calculate)
  return (
    <Platform data={exempleArray} title="English" slice={totalTime}/>
  )
}

export default English