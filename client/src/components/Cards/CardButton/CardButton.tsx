import { useAppDispatch, useAppSelector } from '../../../store';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import './CardButton.scss';

interface CardButton {
  props: {
    code: number;
    title: string;
    price: number;
  }
}

export const CardButton: React.FC<CardButton> = ({ props }) => {

  const cartList = useAppSelector(state => state.cart.list);
  const dispatch = useAppDispatch();



  const isInCart = (): boolean => {
    return cartList.some(purchase => purchase.code === props.code);
  }

  const handleCardButton = (): void => {
    if (isInCart()) {
      dispatch(removeFromCart(props.code));
      return;
    }
    dispatch(addToCart({...props, amount: 1}));
  }

  return(
    <button
      className={`card__button  ${isInCart() ? 'in__cart' : ''}`}
      onClick={handleCardButton}
    >
      {isInCart() ? 'In cart' : 'Add to cart'}
    </button>
  )
}