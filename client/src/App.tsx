import { Route, Routes } from 'react-router-dom';
import { useGettingPopularGoods } from './helpers';
import { AppLayout, Authorization, Cart, Main, StoreSection } from './pages';




export const App = () => {
  
  useGettingPopularGoods();

  return (
    <Routes>
      <Route path='/' element={ <AppLayout /> }>
        <Route index element={ <Main /> }/>
        <Route path='/authorization' element={ <Authorization />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path={'/fitness'} element={ <StoreSection category={'fitness'} />} />
        <Route path={'/electronics'} element={ <StoreSection category={'electronics'} />} />
        <Route path={'/cars'} element={ <StoreSection category={'cars'} />} />
        <Route path={'/fishing'} element={ <StoreSection category={'fishing'} />} />
        <Route path={'/books'} element={ <StoreSection category={'books'} />} />
        <Route path={'/realty'} element={ <StoreSection category={'realty'} />} />
        <Route path={'/services'} element={ <StoreSection category={'services'} />} />
        <Route path={'/food'} element={ <StoreSection category={'food'} />} />
      </Route>
    </Routes>
  )
}