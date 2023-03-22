import uuid from 'react-uuid';
import { setIsOpenBurger } from '../../store/burgerSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { Link } from 'react-router-dom';
import './NavigationMenu.scss';




export const NavigationMenu: React.FC = () => {

  const categories = ['Fitness', 'Electronics', 'Cars', 'Fishing', 'Books', 'Realty', 'Services', 'Food'];
  const isNav = useAppSelector(state => state.burger.isOpenBurger);
  const dispatch = useAppDispatch();


  
  const closeBurger = () => dispatch(setIsOpenBurger(false));



  return(
    <nav className={isNav ? 'show__nav' : ''}>
      {
        categories.map(category => {
          return <Link to={`/${category.toLowerCase()}`} className='category' onClick={closeBurger} key={uuid()}>{category}</Link>
        })
      }
      <button className='close__burger' onClick={closeBurger}></button>
    </nav>
  )
}