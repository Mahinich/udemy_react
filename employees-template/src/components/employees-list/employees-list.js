import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';
let keyCount = 0;

function EmpolyeesList({emp_list}) {

  
  let employees = emp_list.map(item => {
  const {id, ...itemProps} = item;
    
    return (
      <EmployeesListItem key = {id} {...itemProps}/>
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