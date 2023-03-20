import { useAppDispatch } from '../../../store';
import { decrease, increase, removeFromCart } from '../../../store/cartSlice';
import './PurchaseCard.scss';

interface PurchaseCardProps {
  code: number;
  title: string;
  price: number;
  amount: number;
};

export const PurchaseCard: React.FC<PurchaseCardProps> = ({ code, title, price, amount }) => {

  const dispatch = useAppDispatch();

  return(
    <div className='purchase'>
      <div className='purchase__image'>
        <img src={`http://${window.location.hostname}:3001/img/${code}`} width='100%' height='100%'></img>
      </div>
      <div className='purchase__info__container'>
        <div className='purchase__title'>{title}</div>
        <div className='purchase__amount'>
          <div className='decrease' onClick={() => dispatch(decrease(code))}>-</div>
          <div className='amount'>{amount}</div>
          <div className='increase' onClick={() => dispatch(increase(code))}>+</div>
        </div>
        <div className='purchase__price'>{'$' + (price * amount).toFixed(2)}</div>
      </div>
      
      <div className='purchase__remove' onClick={() => dispatch(removeFromCart(code))}>&#215;</div>
    </div>
  )
}