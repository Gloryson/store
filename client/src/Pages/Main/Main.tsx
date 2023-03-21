import uuid from 'react-uuid';
import { Slider } from '../../components';
import { MobileCard } from '../../components';
import { useAppSelector } from '../../store';
import './Main.scss';



export const Main = () => {

  const popularGoods = useAppSelector(state => state.popular.list);

  return(
    <main>
      <Slider />
      <div className='popular'>
        <div className='popular__goods'>
          {
            popularGoods[0] ?
              popularGoods.map(good => {
                return <MobileCard 
                  key={uuid()} 
                  code={good.code} 
                  title={good.title} 
                  stars={good.stars} 
                  price={good.price} 
                />
              }) : <div className='spiner'></div>
          }
        </div>
      </div>
    </main>
  )
}