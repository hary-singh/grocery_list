import { Component } from 'react';
import GroceryList from './components/groceries/GroceryList'
import GroceryItem from './components/groceries/GroceryItem'
import GroceryForm from './components/groceries/GroceryForm'
class App extends Component{
  state = {
      groceries: [
        { id: 1, name: "Apples", price: 10 , complete: false},
        { id: 2, name: "Oranges", price: 5 , complete: false},
        { id: 3, name: "Turnips", price: 15 , complete: false}
      ]
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (incomingItem) => {
    const { groceries } = this.state
    let newItem = { id: this.getId(), ...incomingItem }
    this.setState({ groceries: [...groceries, newItem ]})
  }


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
    <><div className="text-center">
    <h1 className="text-center display-2"> Grocery List </h1><hr />
    <h3 className="text-center">Add a new item to the list:</h3>
    <GroceryForm addItem={this.addItem} /><hr />
    <h3 className="text-center">Here is your current list:</h3>
    <GroceryList groceries={groceries} updateComplete={this.updateComplete} />
    </div>
    
    </>
  )
}
}
export default App;