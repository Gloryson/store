import { Link } from 'react-router-dom';
import { CartButton, CityInput, Clock, SearchInput } from '../';
import { setIsOpenBurger } from '../../store/burgerSlice';
import { useAppDispatch } from '../../store';
import './Header.scss';




export const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const openBurger = () => dispatch(setIsOpenBurger(true));

  return(
    <header>
      <div className='first__row__container'>
        <CityInput />
        <div className='phone__mail__container'>
          <a href="tel:+77777777777" className='contacts__link__phone'>+77 777 777 777</a>
          <a href="mailto:best.brand@brand.com" className='contacts__link__mail'>best.brand@brand.com</a>
        </div>
        <Clock />
      </div>
      <div className='second__row__container'>
        <div className='burger' onClick={openBurger}></div>
        <Link to={'/'}><div className='brand__logo'>BRAND</div></Link>
        <SearchInput />
        <div className='login__cart__container'>
          <Link to={'/authorization'} className='login__button'>
            <div className='login__ico'></div>
            <div className='login__text'>Login</div>
          </Link>
          <CartButton />
        </div>
      </div>
    </header>
  )
}