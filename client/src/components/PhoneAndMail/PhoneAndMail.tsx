import './PhoneAndMail.scss';



export const PhoneAndMail = () => {
  return(
    <div className='phone__mail__container'>
      <a href="tel:+77777777777" className='contacts__link'>
        <div className='phone__ico'></div>
        <div className='phone__text'>+77 777 777 777</div>
      </a>
      <a href="mailto:best.brand@brand.com" className='contacts__link'>
        <div className='mail__ico'></div>
        <div className='mail__text'>best.brand@brand.com</div>
      </a>
    </div>
  )
}