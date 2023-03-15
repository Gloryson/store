import { useEffect, useState } from 'react';
import { getStringWithTime } from '../../helpers';
import './Clock.scss';



export const Clock = () => {

  const [time, setTime] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(() => getStringWithTime());
    }, 1000) 
    return () => clearTimeout(timer);
  }, [time])

  return(
    <div className='clock__container'>
      <div className='clock__ico'></div>
      <div className='clock__time'>{time}</div>
    </div>
  )
}