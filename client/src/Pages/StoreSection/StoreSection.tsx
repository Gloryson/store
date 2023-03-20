import './StoreSection.scss';



export const StoreSection: React.FC<{category: string}> = ({ category }) => {
  
  return(
    <section className='store__section'>{category}</section>
  )
}