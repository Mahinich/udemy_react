import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmpolyeesList({emp_list, onDelete, onToggleIncrease, onToggleRise, updateSalary}) {
  
  let employees = emp_list.map(item => {
  const {id, name, increase, rise, salary} = item;
    
    return (
      <EmployeesListItem 
        key = {id} 
        name = {name}
        increase = {increase}
        rise = {rise}
        salary = {salary}
        onDelete = {() => onDelete(id)}
        onToggleIncrease = {() => onToggleIncrease(id)}
        onToggleRise = {() => onToggleRise(id)}
        updateSalary={(newSalary) => updateSalary(id, newSalary)}
      />
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