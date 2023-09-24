import React from 'react';
import "./footer.css";

const EveryDay = ({data}) => {
  const minutes = Math.floor(data.time / 60)
  const hours = Math.floor(((data.time/60)/60)%24)
  return (
    <div className='everyDay'>
        <div className='timeADay' style={{backgroundColor:
        data.time == 0 ? "rgb(51, 49, 49)" : "brown",
        color: data.time == 0 ? "rgb(51, 49, 49)" : "white"
        }}>
            {hours}h<br />
            {minutes}:{data.time % 60}
        </div>
    {data.day}
    </div>
  )
}

export default EveryDay