import './employees-add-form.css';

function EmployessAddForm() {
  return(
    <div className="employees-add-form">
      <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex">
          <input type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?" />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?" />

          <button type="submit"
            className="btn btn-outline-light">Додати</button>
        </form>
    </div>
  )
}

export default EmployessAddForm;