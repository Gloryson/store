import './SearchInput.scss';



export const SearchInput = () => {
  return(
    <div className='search__container'>
      <div className='search__ico'></div>
      <input type="search" className='search__input' />
    </div>
  )
}