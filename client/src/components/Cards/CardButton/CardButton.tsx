import { useAppDispatch, useAppSelector } from '../../../store';
import './CardButton.scss';

interface CardButton {
  props: {
    code: number;
    title: string;
    price: string;
  }
}

export const CardButton: React.FC<CardButton> = ({ ...props }) => {

  const cartList = useAppSelector(state => state.cart.list);
  const dispatch = useAppDispatch();

  return(
    <button className='card__button'>Add to cart</button>
  )
}