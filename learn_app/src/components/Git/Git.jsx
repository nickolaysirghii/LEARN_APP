import React from 'react';
import Platform from '../Platform/Platform';
import { GitArray } from '../../data/gitData';

const Git = () => {
  return (
    <Platform title="Git" data={GitArray} />
  )
}

export default Git