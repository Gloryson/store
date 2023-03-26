import { useState } from 'react';
import uuid from 'react-uuid';
import './SearchInput.scss';



export const SearchInput = () => {

  const [finds, setFinds] = useState([]);

  

  const getSearchingResults = (str: string): void => {
    if (!str) {
      setFinds([]);
      return;
    }
    fetch(`http://${window.location.hostname}:3001/search/${str}`)
      .then(response => response.json())
      .then(data => {
        setFinds(data);
      })
      .catch((error) => console.log(error))
  }


  
  return(
    <div className='search__container'>
      <div className='search__ico'></div>
      <input
        type='search'
        className='search__input'
        onChange={(event) => {
          getSearchingResults(event.target.value);
        }}
      />
      <div className={finds[0] ? 'searching__results' : 'off'}>
        {
          finds.map((elem: any) => {
            return <div key={uuid()} className='result'>{elem.name}</div>
          })
        }
      </div>
    </div>
  )
}