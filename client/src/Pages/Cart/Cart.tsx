import { useEffect } from 'react';
import uuid from 'react-uuid';
import { PurchaseCard } from '../../components';
import { useAppSelector } from '../../store';
import './Cart.scss';



export const Cart = () => {

  const cartList = useAppSelector(state => state.cart.list);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <section className='cart__container'>
      {cartList.map(purchase => {
        return <PurchaseCard 
          key={uuid()}
          code={purchase.code}
          title={purchase.title}
          price={purchase.price}
          amount={purchase.amount}
        />
      })}
    </section>
  )
}