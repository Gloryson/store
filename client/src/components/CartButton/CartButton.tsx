import './CartButton.scss';



export const CartButton = () => {
  return(
    <button className='cart__container'>
      <div className='cart__ico'>
        <div className='cart__not__empty  cart__empty'></div>
      </div>
      <div className='cart__text'>Cart</div>
    </button>
  )
}