import './app.css';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployessAddForm from '../employees-add-form/employees-add-form';

function App() {

  const employees_data = [
    { name: "Курлак В", salary: 200, increase: true, id: 0 },
    { name: "Максимович Р", salary: 830, increase: false, id: 1 },
    { name: "Кошова С", salary: 450, increase: true, id: 2 },
    { name: "Киритян Ч", salary: 789, increase: false, id: 3 },
    { name: "Малишева Н", salary: 1000, increase: true, id: 4 },
    { name: "Цимбалюк Ю", salary: 920, increase: false, id: 5 },
    { name: "Аветисян К", salary: 2500, increase: true, id: 6 },
    { name: "Мамаев С", salary: 3408, increase: false, id: 7 },
    { name: "Кулямда Г", salary: 7660, increase: true, id: 8 },
    { name: "Мартишев С", salary: 2356, increase: false, id: 9 },
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