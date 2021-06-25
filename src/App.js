import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ExpenseList from './components/ExpenseList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      location: '',
      amount: '',
      description: '',
      expenseArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }

  componentDidMount() {
    const localStorageExpenses =
      JSON.parse(localStorage.getItem('expenses')) || [];

    this.setState({
      expenseArray: localStorageExpenses
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenseArray !== prevState.expenseArray.length) {
      localStorage.setItem('expenses', JSON.stringify(this.state.expenseArray));
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newId = Date.now();
    const newItem = {
      id: newId,
      date: this.formatDate(),
      location: this.state.location,
      amount: this.state.amount,
      description: this.state.description
    };
    this.setState({
      expenseArray: [...this.state.expenseArray, newItem],
      date: '',
      location: '',
      amount: '',
      description: ''
    });
  }

  formatDate() {
    let date = new Date(this.state.date);
    const options = {
      dateStyle: 'full',
      timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  handleDeleteRow(id) {
    const deleteRow = this.state.expenseArray.filter(
      (expense) => expense.id !== id
    );
    this.setState({
      expenseArray: deleteRow
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <br></br>
        <ExpenseList
          expenseArray={this.state.expenseArray}
          handleDeleteRow={this.handleDeleteRow}
        />
      </div>
    );
  }
}
export default App;
