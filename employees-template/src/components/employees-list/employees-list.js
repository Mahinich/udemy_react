import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmpolyeesList() {
  return(
    <ul className="employees-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  );
}

export default EmpolyeesList;