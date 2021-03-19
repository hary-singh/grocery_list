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
        <div className="row-g3">
        <div className="col">
        <input
          className="form-control"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        /></div>
        <div className="col">
        <input
          className="form-control"
          name="price"
          value={price}
          onChange={this.handleChange}
          required
          placeholder="Price"
        /></div></div>
        <button className="btn" type="submit">Submit</button>
      </form> 
    )
  }
}

export default GroceryForm;