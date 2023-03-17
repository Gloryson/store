import { Link } from 'react-router-dom';
import './Authorization.scss';



export const Authorization = () => {
  return(
    <section className='auth__container'>
      <div className='title__and__registration'>Don't have an account? <Link to={'/'}>Register.</Link></div>
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Password' />
      <button>Sign in</button>
    </section>
  )
}