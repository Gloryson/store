import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './Slider.scss';




export const Slider = () => {

  const [pos, setPos] = useState({curr: 1, prev: 4});

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setPos(pos => ({
        curr: pos.curr + 1 < 5 ? pos.curr + 1 : 1,
        prev: pos.curr
      }))
    }, 5000);
    return () => clearTimeout(autoSlide);
  }, [pos])



  return(
    <section className='slider'>
      <div className='slider__area'>

        <div className={`slide__in  slide${pos.curr}`} key={uuid()}></div>
        <div className={`slide__out  slide${pos.prev}`} key={uuid()}></div>

        <div className='slider__button__area'> {
          [1, 2, 3, 4].map(i => {
            return <button
              key={uuid()}
              className={`slider__button${i === pos.curr ? '__active' : ''}`}
              onClick={() => setPos(pos => ({
                curr: i,
                prev: pos.curr
              }))} ></button>
          })
        }
        </div>

      </div>
    </section>
  )
}