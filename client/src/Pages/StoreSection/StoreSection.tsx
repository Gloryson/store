import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { MobileCard, Card } from '../../components';
import { getSubcategories } from '../../helpers';
import './StoreSection.scss';



export const StoreSection: React.FC<{category: string}> = ({ category }) => {

  const [state, setState] = useState({
    data: [], 
    goods: [], 
    filters: [''], 
    currFilter: '', 
    isOpenFilters: false
  });


  
  useEffect(() => {
    setState(state => ({...state, data: []}));
    fetch(`http://${window.location.hostname}:3001/db/${category}`)
      .then(response => response.json())
      .then(data => {
        setState(state => ({...state, data: data, goods: data, filters: getSubcategories(data)}));
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [category])

  
  
  return(
    <section className='store__section'>
      { 
        state.data[0] ?
          state.goods.map((good: any) => {
            if (matchMedia('(hover:none)').matches || window.innerWidth < 900) {
              return <MobileCard 
                key={uuid()}
                code={good.code}
                title={good.name}
                stars={good.stars}
                price={good.price[1]}
              />
            }
            return <Card 
              key={uuid()}
              code={good.code}
              title={good.name}
              stars={good.stars}
              price={good.price[1]}
              description={good.description}
            />
          }) : <div className='spiner'></div>
      }

      <div className={`filters  ${state.isOpenFilters ? '' : 'off'}`}>
        {
          state.filters.map(subcategory => {
            return <div className='filter' key={uuid()}
              onClick={() => {
                setState(state => ({
                  ...state,
                  currFilter: subcategory,
                  goods: [...state.data].filter((good: any) => good.subCategory === subcategory)
                }))
                window.scrollTo(0, 0);
              }}>{subcategory}</div>
          })
        }
      </div>

      <button className='filters__button' onClick={() => setState(state => (
        {...state, isOpenFilters: !state.isOpenFilters}
      ))}></button>
      
    </section>
  )
}