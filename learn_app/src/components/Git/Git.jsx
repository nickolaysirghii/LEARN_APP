import React from 'react';
import Platform from '../Platform/Platform';
import { GitArray } from '../../data/gitData';
import { useSelector } from 'react-redux';

const Git = () => {
  const {Git} = useSelector((state)=>state.calculate)
  return (
    <Platform title="Git" data={GitArray} slice={Git} />
  )
}

export default Git