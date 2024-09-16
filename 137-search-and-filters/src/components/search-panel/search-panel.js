import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onSearchUpdate = (e) => {
    const term = e.target.value;   
    this.setState({term})
    this.props.onSearchUpdate(term)
  }

  render() {
    return(
      <input 
        type="text" 
        className='form-control search-input' 
        value = {this.state.term}
        placeholder='знайти співробітника'
        onChange = {this.onSearchUpdate}
      />
    ) 
  }
  
}

export default SearchPanel;