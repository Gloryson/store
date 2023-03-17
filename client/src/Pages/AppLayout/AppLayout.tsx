import { useState } from "react";
import { Outlet } from "react-router-dom"
import { Footer, Header, NavigationMenu } from "../../components"




export const AppLayout = () => {

  const [isNav, setIsNav] = useState(false);

  return(
    <>
      <Header
        isNav={isNav}
        setIsNav={setIsNav}
      />
      <NavigationMenu
        isNav={isNav}
        setIsNav={setIsNav}
      />
      <Outlet />
      <Footer />
    </>
  )
}