import GroceryItem from './GroceryItem';

const GroceryList = ({ groceries , updateComplete }) => {
  return(
    <>
      {  groceries.map( g => (
          <GroceryItem key={g.id} {...g} updateComplete={updateComplete}/>
        ))
      }
    </>
  )
}

export default GroceryList;