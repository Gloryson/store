import './Header.scss';



export const Header = () => {
  return(
    <header>
      <div className='contacts-info-block'>
        <div className='row__container'>
          <div className='location'>
            <div className='location__ico'></div>
            <div className='location__text'>Choose your city</div>
          </div>
          <div className='contacts__container'>
            <a href='tel:+777777777777'><div className='phone'>
              <div className='phone__ico'>&#9742;</div>
              <div className='phone__text'>+777 77 777 77 77</div>
            </div></a>
            <a href='mailto:bestbrand@brand.com'><div className='mail'>
              <div className='mail__ico'>&#9993;</div>
              <div className='mail__text'>BestBrand@brand.com</div>
            </div></a>
          </div>
          <div className='clock'>
            <div className='ico__clock'>
              <div className='clock-arrow'>L</div>
            </div>
            <div className='clock__time'></div>
          </div>
        </div>
      </div>
      <div className='logo-search-cart-block'>
        <div className='row__container'>
          <a href='./index.html'><div className='brand-logo'>BRAND</div></a>
          <div className='search__container'>
            <div className='search__ico'></div>
            <input type='search' className='search__input' />
          </div>
          <div className='login-cart__container'>
            <div className='login__container  jsLoginContainer'>
              <div className='login__ico'></div>
              <div className='login__text'>Account</div>
            </div>
            <div className='cart__container  jsCart'>
              <div className='cart__ico'>
                <div className='cart-not-empty  cart-empty'></div>
              </div>
              <div className='cart__text'>Cart</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}