import { CartButton, CityInput, Clock, LoginButton, PhoneAndMail, SearchInput } from '../';
import './Header.scss';



export const Header = () => {
  return(
    <header>
      <div className='first__row__container'>
        <CityInput />
        <PhoneAndMail />
        <Clock />
      </div>
      <div className='second__row__container'>
        <a href="#"><div className='brand__logo'>BRAND</div></a>
        <SearchInput />
        <div className='login__cart__container'>
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </header>
  )
}