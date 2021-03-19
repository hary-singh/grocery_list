import { Component } from 'react';

class GroceryItem extends Component{

  render(){
      const { id, name, price } = this.props
      return(
        <div>
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
      )
  }

}

export default GroceryItem;