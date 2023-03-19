import uuid from 'react-uuid';
import { Slider } from '../../components';
import { MobileCard } from '../../components/Cards';
import { useAppSelector } from '../../store';
import './Main.scss';



export const Main = () => {

  const popularGoods = useAppSelector(state => state.popular.list);

  return(
    <main>
      <Slider />
      <div className='popular'>
        <div className='popular__goods'>

          {popularGoods.map(good => {
            return <MobileCard 
              key={uuid()} 
              code={good.code} 
              title={good.name} 
              stars={good.stars} 
              price={good.price} 
            />
          })}

        </div>
      </div>
    </main>
  )
}