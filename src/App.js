import { Component } from 'react';
import GroceryList from './components/groceries/GroceryList'
import GroceryItem from './components/groceries/GroceryItem'
class App extends Component{
  state = {
      groceries: [
        { id: 1, name: "Apples", price: 10 },
        { id: 2, name: "Oranges", price: 5 },
        { id: 3, name: "Turnips", price: 15 }
      ]
  }

render() {
  const { groceries } = this.state
  return (
    <>
    <h1> Welcome to our Grocery Store</h1>
    <GroceryList groceries={groceries} />
    </>
  )
}
}
export default App;