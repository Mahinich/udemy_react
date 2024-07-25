import './app.css';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployessAddForm from '../employees-add-form/employees-add-form';

function App() {

  const employees_data = [
    { name: "Курлак В", salary: 200, increase: true },
    { name: "Максимович Р", salary: 830, increase: false },
    { name: "Кошова С", salary: 450, increase: true },
    { name: "Киритян Ч", salary: 789, increase: false },
    { name: "Малишева Н", salary: 1000, increase: true },
    { name: "Цимбалюк Ю", salary: 920, increase: false },
    { name: "Аветисян К", salary: 2500, increase: true },
    { name: "Мамаев С", salary: 3408, increase: false },
    { name: "Кулямда Г", salary: 7660, increase: true },
    { name: "Мартишев С", salary: 2356, increase: false },
  ];
  
  return(
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
      </div>
      <EmployeesList emp_list={employees_data}/>
      <EmployessAddForm/>
    </div>
  );
}

export default App;