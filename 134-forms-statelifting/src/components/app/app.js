import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployessAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees_data: [
        { name: "Курлак В", salary: 200, increase: true, rise: true, id: 1 },
        { name: "Максимович Р", salary: 830, increase: false, rise: false, id: 2 },
        { name: "Кошова С", salary: 450, increase: true, rise: false, id: 3 },
        { name: "Киритян Ч", salary: 789, increase: false, rise: false, id: 4 },
        { name: "Малишева Н", salary: 1000, increase: true, rise: false, id: 5 },
        { name: "Цимбалюк Ю", salary: 920, increase: false, rise: false, id: 6 },
        { name: "Аветисян К", salary: 2500, increase: true, rise: false, id: 7 },
        { name: "Мамаев С", salary: 3408, increase: false, rise: false, id: 8 },
        { name: "Кулямда Г", salary: 7660, increase: true, rise: false, id: 9 },
        { name: "Мартишев С", salary: 2356, increase: false, rise: false, id: 10 },
      ],
    }
    this.maxId = 11;
  }

  deleteItem = (id) => {
    this.setState(({employees_data}) => {
      // const index = employees_data.findIndex(elem => elem.id === id);
      // const before = employees_data.slice(0, index);
      // const after = employees_data.slice(index + 1);
      // const newArray = [...before, ...after]

      return {
        employees_data: employees_data.filter(item => item.id !== id)
      }
    })
  }
  
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({employees_data}) => {
      const newArray = [...employees_data, newItem];

      return({
        employees_data: newArray
      })
    })
  }
  
  onToggleIncrease = (id) => {
    this.setState(({employees_data}) => {
      const index = employees_data.findIndex(item => item.id === id);

      const old = employees_data[index];
      const newItem = {...old, increase: !old.increase}; 
      const newArray = [...employees_data.slice(0, index), newItem, ...employees_data.slice(index + 1)];

      return ({
        employees_data: newArray
      })
    })
  }

  onToggleRise = (id) => {
    this.setState(({employees_data}) => {
      const index = employees_data.findIndex(item => item.id === id);

      const old = employees_data[index];
      const newItem = {...old, rise: !old.rise}; 
      const newArray = [...employees_data.slice(0, index), newItem, ...employees_data.slice(index + 1)];

      return ({
        employees_data: newArray
      })
    })
  }
  
  
  render() {
    const totalAmount = this.state.employees_data.length;
    const increaseAmount = this.state.employees_data.filter(item => item.increase).length;
    
    return(
      <div className="app">
        <AppInfo increaseAmount = {increaseAmount} totalAmount = {totalAmount}/>
        <div className="search-panel">
          <SearchPanel/>
        </div>
        <EmployeesList emp_list={this.state.employees_data} 
          onDelete = {this.deleteItem}
          onToggleIncrease = {this.onToggleIncrease}
          onToggleRise = {this.onToggleRise}/>
        <EmployessAddForm onAdd={this.addItem}/>
      </div>
    );
  }

  
}


export default App;