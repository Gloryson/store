import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setPopular } from "../../store/popularSlice";




export const usePopularGoods = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    fetch('http://localhost:3001/db/popular')
      .then(response => response.json())
      .then(data => {
        const result = data.map((good: any) => ({code: good.code, name: good.name, stars: good.stars, price: good.price[0]}))
        dispatch(setPopular(result));
      })
      .catch((error) => console.log(error));
  }, [])
}