import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setPopular } from '../store/popularSlice';




export const useGettingPopularGoods = () => {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    fetch(`http://${window.location.hostname}:3001/db/popular`)
      .then(response => response.json())
      .then(data => {
        const result = data.map((good: any) => ({code: good.code, title: good.name, stars: good.stars, price: good.price[1]}))
        dispatch(setPopular(result));
      })
      .catch((error) => console.log(error));
  }, [])
}