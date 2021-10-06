import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: '',
    }
  }

  // локально а не в App
  onUpdateSearch = (event) => {
    const term = event.target.value
    // установка локального состояния
    this.setState({term: term})
    // а это из другого компонента
    // и выполняет свою роль глобально
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        onChange={this.onUpdateSearch}
        value={this.state.term}
        type='text'
        className='form-control search-input'
        placeholder='Найти сотрудника'
      />
    )
  }
}

export default SearchPanel
