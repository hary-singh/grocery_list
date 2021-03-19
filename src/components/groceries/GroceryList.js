import GroceryItem from './GroceryItem';

const GroceryList = ({ groceries }) => {
  return(
    <>
      {  groceries.map( g => (
          <GroceryItem {...g} />
        ))
      }
    </>
  )
}

export default GroceryList;