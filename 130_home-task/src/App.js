import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.counter,
    }
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  counterPlus = () => {
    // this.setState({
    //   counterValue: this.state.counterValue + 1

    if (this.state.counterValue < 10) {
      this.setState(state => ({
        counterValue: state.counterValue + 1
      }))
    }
  }

  counterMinus = () => {

    if (this.state.counterValue > -10) {
      this.setState(state => ({
        counterValue: state.counterValue - 1
      }))
    }
  }

  randomCounterValue = () => {
    this.setState({
      counterValue: Math.floor(Math.random() * (10 - -10 + 1)) + -10
    })
  }

  resetValue = () => {
    this.setState({
      counterValue: this.props.counter
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counterValue}</div>
        <div className="controls">
          <button onClick = {this.counterPlus}>INC</button>
          <button onClick = {this.counterMinus}>DEC</button>
          <button onClick = {this.randomCounterValue}>RND</button>
          <button onClick = {this.resetValue}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
