import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';
let keyCount = 0;

function EmpolyeesList(props) {
  let employees = props.emp_list.map(item => {
    return (
      <EmployeesListItem key = {keyCount} {...item}/>
    )
  })

  return(
    <ul className="employees-list list-group">
      {/* <EmployeesListItem name={props.emp_list.name} salary={props.emp_list.salary}/> */}
      {employees}
    </ul>
  );
}

export default EmpolyeesList;