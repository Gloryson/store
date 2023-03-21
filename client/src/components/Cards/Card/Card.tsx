import { CardButton } from '../CardButton/CardButton';
import './Card.scss';

interface CardProps {
  code: number;
  title: string;
  stars: number;
  price: number;
  description: string;
}

export const Card: React.FC<CardProps> = ({ code, title, stars, price, description }) => {

  const starsGradient: string = `linear-gradient(90deg, #ffb700 ${stars}%, #dddddd ${100 - stars}%)`;

  return(
    <div className='card'>
      <div className='card__row'>
        <div className='card__image'>
          <img src={`http://${window.location.hostname}:3001/img/` + code} width={'100%'} height={'100%'}></img>
        </div>
        <div className='card__text__container'>
          <div className='card__name'>{title}</div>
          <div className='card__description'>{description}</div>
          <div className='card__description'>{description}</div>
        </div>
      </div>
      <div className='card__col'>
        <div className="card__price">{'$' + price}</div>
        <div className="card__stars" style={{background: starsGradient}}></div>
        <CardButton props={{ code, title, price }} />
      </div>
    </div>
  )
}