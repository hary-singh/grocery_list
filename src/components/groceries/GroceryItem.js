import { Component } from 'react';

class GroceryItem extends Component{

  render(){
      const { id, name, price, complete, updateComplete } = this.props
      const styles = {
        complete: {
          textDecoration: 'line-through'
        }
      }
      return(
        <div>
          <h4
            style={ complete ? {...styles.complete} : null }
            onClick={() => updateComplete(id)}
          >
            {name} -- ${price}</h4>
        </div>
      )
  }

}

export default GroceryItem;