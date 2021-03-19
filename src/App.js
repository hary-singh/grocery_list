import { Component } from 'react';
import GroceryList from './components/groceries/GroceryList'
import GroceryItem from './components/groceries/GroceryItem'
class App extends Component{
  state = {
      groceries: [
        { id: 1, name: "Apples", price: 10 , complete: false},
        { id: 2, name: "Oranges", price: 5 , complete: false},
        { id: 3, name: "Turnips", price: 15 , complete: false}
      ]
  }

  getId = () => {}

  updateComplete = ( id ) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( g => {
        if ( g.id === id){
          return {
            ...g,
            complete: !g.complete
          }
        }
        return g
      })
    })

  }
render() {
  const { groceries } = this.state
  return (
    <><div className="bg">
    <h1 className="text-center display-2"> Grocery List: </h1><hr />
    <GroceryList groceries={groceries} updateComplete={this.updateComplete} />
    </div></>
  )
}
}
export default App;