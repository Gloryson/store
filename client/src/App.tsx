import { Route, Routes } from "react-router-dom";
import { AppLayout, Authorization, Cart, Main } from "./Pages";




export const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <AppLayout /> }>
        <Route index element={ <Main /> }/>
        <Route path='/authorization' element={ <Authorization />} />
        <Route path='/cart' element={ <Cart />} />
      </Route>
    </Routes>
  )
}