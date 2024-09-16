import './app-info.css';

const AppInfo = ({increaseAmount, totalAmount}) => {
  return(
    <div className="app-info">
      <h1>Облік співпрацівників у компанії</h1>
      <h2>Загальна кількість співпрацівників {totalAmount}</h2>
      <h3>Премію отримають {increaseAmount}</h3>
    </div>
  );
}

export default AppInfo;