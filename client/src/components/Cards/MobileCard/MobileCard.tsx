import { CardButton } from '../CardButton/CardButton';
import './MobileCard.scss';

export interface MobileCardProps {
  code: number;
  title: string;
  stars: number;
  price: string;
}

export const MobileCard: React.FC<MobileCardProps> = ({ code, title, stars, price }) => {
  return(
    <div className='mobile__card'>
      <div className='mobile__card__img'>
        <img src={'http://localhost:3001/img/' + code} width={'100%'} height={'100%'}></img> 
      </div>
      <div className='mobile__card__col'>
        <div className='mobile__card__name'>{title}</div>
        <div className='mobile__card__stars'>{stars}</div>
        <div className='mobile__card__price'>{price}</div>
        <CardButton props={{ code, title, price }} />
      </div>
    </div>
  )
}