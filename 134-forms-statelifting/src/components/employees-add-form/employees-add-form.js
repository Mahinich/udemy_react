import {Component} from 'react';
import './employees-add-form.css';

class EmployessAddForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
    name: '',
    salary: '',
  }
 }

 onChangeValue = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
 }

 onSubmit = (e) => {
  e.preventDefault();

  this.props.onAdd(this.state.name, this.state.salary);
  this.setState({
    name: '',
    salary: ''
  })
 }
 
 render() {
  const {name, salary} = this.state;

  return (
      <div className="employees-add-form">
        <h3>Добавьте нового сотрудника</h3>
          <form
            className="add-form d-flex"
            onSubmit={this.onSubmit}>
            <input type="text" 
              className="form-control new-post-label" 
              placeholder="Як його звати?" 
              name='name' 
              value = {name} 
              onChange = {this.onChangeValue} />
            <input type="number" 
              className="form-control" 
              placeholder="З/П в $?" 
              name='salary' 
              value = {salary} 
              onChange = {this.onChangeValue}/>
  
            <button type="submit"
                    className="btn btn-outline-light">Додати</button>
          </form>
      </div>
    )
 }
 
}

export default EmployessAddForm;