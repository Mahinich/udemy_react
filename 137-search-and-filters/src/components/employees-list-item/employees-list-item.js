import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
  }

  handleSalaryChange = (e) => {
    const newSalary = +e.target.value;
    this.props.updateSalary(newSalary);
  }
  
  render () {
    const {name, salary, onDelete, increase, rise, onToggleIncrease, onToggleRise} = this.props;  
    let classNames = 'list-group-item d-flex justify-content-between';
  
    if (increase) {
      classNames += ' increase'
    }
    if (rise) {
      classNames += ' like';
    }


    return(
      <li className={classNames}>
        <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
        <input 
          type="text" 
          className="list-group-item-input" 
          defaultValue={`${salary}$`}
          onChange={this.handleSalaryChange}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className="btn-cookie btn-sm " onClick = {onToggleIncrease}>
            <i className="fas fa-cookie"></i>
          </button>
  
          <button type="button" className="btn-trash btn-sm " onClick={() => onDelete()}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
} 

export default EmployeesListItem;