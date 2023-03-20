import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import './CartButton.scss';



export const CartButton = () => {

  const cartList = useAppSelector(state => state.cart.list);

  return(
    <Link to={'/cart'} className='cart__button'>
      <div className='cart__ico'>
        <div className={cartList[0] ? 'cart__not__empty' : 'cart__empty'}>{cartList.length}</div>
      </div>
      <div className='cart__text'>Cart</div>
    </Link>
  )
}