import './App.css';
import {Component} from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 31,
      text: 'button',
    }
  }

  nextYear = () => {
    console.log('+++');
    // this.setState({
    //   age: this.state.age + 1,
    // })

    this.setState(state => ({
      age: state.age + 1
    }))
  }

  applyInputChange = (e, color) => {
    console.log(e.target.value, color)

    this.setState({
      position: e.target.value
    })

  }
  
  render() {
    const {name, surname, link} = this.props;
    const {position, age} = this.state;

    return(
      <div>
        <h1>My name is {name()} and surname - {surname}. Age – {age}, position - {position}</h1>
        <a href={link} target='_blank'>My link</a>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <form>
          <span>натиснути кнопку</span>
          <input type="text" onChange={(e) => this.applyInputChange(e, 'some color')} />
        </form>
      </div>
    )
  }
}

const obj = {a: 1, b: 2}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => 'Andriy'} surname = 'Mahinich' link='https://www.facebook.com'/>
      <WhoAmI name={() => 'Natali'} surname = 'Tarnavskaya' link='instagram.com'/>
    </div>
  );
}

export default App;
