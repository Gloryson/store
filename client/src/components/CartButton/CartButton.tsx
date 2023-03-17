import { Link } from 'react-router-dom';
import './CartButton.scss';



export const CartButton = () => {
  return(
    <Link to={'/cart'} className='cart__button'>
      <div className='cart__ico'>
        <div className='cart__not__empty  cart__empty'></div>
      </div>
      <div className='cart__text'>Cart</div>
    </Link>
  )
}