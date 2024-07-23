import './app.css';

import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployessAddForm from '../employees-add-form/employees-add-form';

function App() {
  return(
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
      </div>
      <EmployeesList/>
      <EmployessAddForm/>
    </div>
  );
}

export default App;