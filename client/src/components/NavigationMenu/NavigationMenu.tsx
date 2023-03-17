import { Dispatch, SetStateAction } from 'react';
import './NavigationMenu.scss';



interface NavigationMenuProps {
  isNav: boolean;
  setIsNav: Dispatch<SetStateAction<boolean>>;
}



export const NavigationMenu: React.FC<NavigationMenuProps> = ({ isNav, setIsNav }) => {
  return(
    <nav className={isNav ? 'appearance' : ''}>
      <div className='category' onClick={() => setIsNav(() => false)}>Fitness</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Electronics</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Cars</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Fishing</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Books</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Realty</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Services</div>
      <div className='category' onClick={() => setIsNav(() => false)}>Food</div>
    </nav>
  )
}