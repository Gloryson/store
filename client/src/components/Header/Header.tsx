import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { CartButton, CityInput, Clock, LoginButton, PhoneAndMail, SearchInput } from '../';
import './Header.scss';



interface HeaderProps {
  isNav: boolean;
  setIsNav: Dispatch<SetStateAction<boolean>>;
}



export const Header: React.FC<HeaderProps> = ({ isNav, setIsNav }) => {
  return(
    <header>
      <div className='first__row__container'>
        <CityInput />
        <PhoneAndMail />
        <Clock />
      </div>
      <div className='second__row__container'>
        <div className='burger' onClick={() => setIsNav(() => true)}></div>
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