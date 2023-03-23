import './CityInput.scss';



export const CityInput = () => {

  const cities = ['Choose city', 'London', 'Paris', 'Berlin', 'Warsaw', 'Vilnius', 'Riga', 'Copenhagen', 'Oslo', 'Stockholm', 'Helsinki', 'Rome', 'Madrid', 'Minsk', 'Kyiv'];

  return(
    <div className='city__input__container'>
      <select className='city__input'>
        {cities.map((city, index) => { return <option key={index + city}>{city}</option> })}
      </select>
    </div>
  )
}