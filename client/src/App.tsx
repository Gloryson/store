import { Route, Routes } from "react-router-dom";
import uuid from "react-uuid";
import { usePopularGoods } from "./helpers";
import { AppLayout, Authorization, Cart, Main, StoreSection } from "./Pages";




export const App = () => {
  
  usePopularGoods();

  return (
    <Routes>
      <Route path='/' element={ <AppLayout /> }>
        <Route index element={ <Main /> }/>
        <Route path='/authorization' element={ <Authorization />} />
        <Route path='/cart' element={ <Cart />} />
        {
          [
            'fitness',
            'electronics',
            'cars',
            'fishing',
            'books',
            'realty',
            'services',
            'food'
          ].map(category => {
            return <Route
              path={`/${category}`}
              element={ <StoreSection category={category} />}
              key={uuid()}
            />
          })
        }
      </Route>
    </Routes>
  )
}