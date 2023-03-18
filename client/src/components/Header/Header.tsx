import { Link } from 'react-router-dom';
import { CartButton, CityInput, Clock, LoginButton, PhoneAndMail, SearchInput } from '../';
import { setIsNav } from '../../store/burgerSlice';
import { useAppDispatch } from '../../store';
import './Header.scss';




export const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const openBurger = () => dispatch(setIsNav(true));

  return(
    <header>
      <div className='first__row__container'>
        <CityInput />
        <PhoneAndMail />
        <Clock />
      </div>
      <div className='second__row__container'>
        <div className='burger' onClick={openBurger}></div>
        <Link to={'/'}><div className='brand__logo'>BRAND</div></Link>
        <SearchInput />
        <div className='login__cart__container'>
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </header>
  )
}