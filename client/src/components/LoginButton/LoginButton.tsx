import { Link } from 'react-router-dom';
import './LoginButton.scss';



export const LoginButton = () => {
  return(
    <Link to={'/authorization'} className='login__button'>
      <div className='login__ico'></div>
      <div className='login__text'>Login</div>
    </Link>
  )
}