import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { MobileCard, Card } from '../../components';
import './StoreSection.scss';



export const StoreSection: React.FC<{category: string}> = ({ category }) => {

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    setGoods([]);
    fetch(`http://${window.location.hostname}:3001/db/${category}`)
      .then(response => response.json())
      .then(data => {
        setGoods(data);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [category])
  
  return(
    <section className='store__section'>
      { 
        goods[0] ?
          goods.map((good: any) => {
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
      <div className='filters'></div>
    </section>
  )
}