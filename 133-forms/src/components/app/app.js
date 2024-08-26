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
        { name: "Курлак В", salary: 200, increase: true, id: 1 },
        { name: "Максимович Р", salary: 830, increase: false, id: 2 },
        { name: "Кошова С", salary: 450, increase: true, id: 3 },
        { name: "Киритян Ч", salary: 789, increase: false, id: 4 },
        { name: "Малишева Н", salary: 1000, increase: true, id: 5 },
        { name: "Цимбалюк Ю", salary: 920, increase: false, id: 6 },
        { name: "Аветисян К", salary: 2500, increase: true, id: 7 },
        { name: "Мамаев С", salary: 3408, increase: false, id: 8 },
        { name: "Кулямда Г", salary: 7660, increase: true, id: 9 },
        { name: "Мартишев С", salary: 2356, increase: false, id: 10 },
      ]
    }
    this.maxId = 10;
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
      id: this.maxId++
    }

    this.setState(({employees_data}) => {
      const newArray = [...employees_data, newItem];
        return {
          employees_data: newArray
        }
    })

  }
  
  render() {
    return(
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
        </div>
        <EmployeesList emp_list={this.state.employees_data} onDelete = {this.deleteItem}/>
        <EmployessAddForm onAdd={this.addItem}/>
      </div>
    );
  }

  
}


export default App;