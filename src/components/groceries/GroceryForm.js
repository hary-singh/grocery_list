import { Component } from 'react';

class GroceryForm extends Component {
  state = { name: "", price: "" }
  componentDidMount() {
    if (this.props.id) {
      const { id, name, price } = this.props
      this.setState({ id, name, price })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      
      const { updateGroceryItem, toggleEdit } = this.props
      updateGroceryItem(this.state)
      toggleEdit()
    } else {
      this.props.addGroceryItem(this.state)
    }
    this.setState({ name: "", price: "" })
  }

  render() {
    const { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        <input
          name="price"
          value={price}
          onChange={this.handleChange}
          required
          placeholder="Price"
        />
        <button type="submit">Submit</button>
      </form> 
    )
  }
}

export default GroceryForm;