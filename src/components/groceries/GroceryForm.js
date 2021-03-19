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
      
      const { updateItem, toggleEdit } = this.props
      updateItem(this.state)
      toggleEdit()
    } else {
      this.props.addItem(this.state)
    }
    this.setState({ name: "", price: "" })
  }

  render() {
    const { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input
          className="col-sm-3 my-1"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        
        <input
          className="col-sm-3 my-1"
          name="price"
          value={price}
          onChange={this.handleChange}
          required
          placeholder="Price"
        />
        <div className="col-auto my-2">
        <button className="btn btn-primary mb-2" type="submit">Submit</button></div>
      </form> 
    )
  }
}

export default GroceryForm;