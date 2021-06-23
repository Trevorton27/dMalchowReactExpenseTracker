
import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import ExpenseList from "./components/ExpenseList"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      location: "",
      amount: "",
      description: "",
      expenseArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteRow = this.handleDeleteRow.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let newId = Date.now()
    const newItem = {
      id: newId,
      date: this.state.date,
      location: this.state.location,
      amount: this.state.amount,
      description: this.state.description,
    }
    this.setState({
      expenseArray: [...this.state.expenseArray, newItem],
      date: '',
      location: '',
      amount: '',
      description: ''
    })
  }

  handleDeleteRow(id) {
    const deleteRow = this.state.expenseArray.filter(expense => expense.id !== id)
    this.setState({
      expenseArray: deleteRow
    })

  }
  render() {
    return (
      <div>
        <Header />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} />
        <br></br>
        <ExpenseList expenseArray={this.state.expenseArray} handleDeleteRow={this.handleDeleteRow} />
      </div >
    )
  }
}
export default App;
