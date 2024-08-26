import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmpolyeesList({emp_list, onDelete}) {

  
  let employees = emp_list.map(item => {
  const {id, ...itemProps} = item;
    
    return (
      <EmployeesListItem key = {id} {...itemProps} onDelete= {() => onDelete(id)}/>
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