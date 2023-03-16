import { Route, Routes } from "react-router-dom";
import { AppLayout, Main } from "./Pages";




export const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <AppLayout /> }>
        <Route index element={ <Main /> }/>
      </Route>
    </Routes>
  )
}