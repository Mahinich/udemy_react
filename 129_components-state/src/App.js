import './App.css';
import {Component} from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 31,
      text: 'button'
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
  
  render() {
    const {name, surname, link} = this.props;
    
    return(
      <div>
        <h1>My name is {name()} and surname - {surname}. Age – {this.state.age}</h1>
        <a href={link} target='_blank'>My link</a>
        <button onClick={this.nextYear}>{this.state.text}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => 'Andriy'} surname = 'Mahinich' link='https://www.facebook.com'/>
      <WhoAmI name={() => 'Natali'} surname = 'Tarnavskaya' link='instagram.com'/>
    </div>
  );
}

export default App;
