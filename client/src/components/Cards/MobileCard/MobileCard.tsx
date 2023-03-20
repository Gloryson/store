import { CardButton } from '../../index';
import './MobileCard.scss';

interface MobileCardProps {
  code: number;
  title: string;
  stars: number;
  price: number;
}

export const MobileCard: React.FC<MobileCardProps> = ({ code, title, stars, price }) => {

  const starsGradient: string = `linear-gradient(90deg, #ffb700 ${stars}%, #dddddd ${100 - stars}%)`;

  return(
    <div className='mobile__card'>
      <div className='mobile__card__img'>
        <img src={`http://${window.location.hostname}:3001/img/` + code} width={'100%'} height={'100%'}></img> 
      </div>
      <div className='mobile__card__col'>
        <div className='mobile__card__name'>{title}</div>
        <div className='mobile__card__stars' style={{background: starsGradient}}></div>
        <div className='mobile__card__price'>{'$' + price}</div>
        <CardButton props={{ code, title, price }} />
      </div>
    </div>
  )
}