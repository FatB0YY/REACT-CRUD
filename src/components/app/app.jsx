import { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'John', salary: 356, increase: false, id: uuidv4() },
        { name: 'Nick', salary: 3742, increase: true, id: uuidv4() },
        { name: 'Alex', salary: 3444, increase: false, id: uuidv4() },
      ],
    }
  }

  deleteItem = (id) => {
    console.log(id)
    this.setState(({ data }) => {
      // const idx = data.findIndex((elem) => elem.id.toString() === id.toString())
      // console.log(idx)

      // удаление элемента из state НАПРЯМУЮ
      // НЕЛЬЗЯ !!!!
      // data.splice(idx, 1)

      // 1 метод
      // const before = data.slice(0, idx)
      // const after = data.slice(idx + 1)
      // const newArray = [...before, ...after]

      // 2 метод
      const newArray = data.filter((item) => item.id !== id)

      return {
        data: newArray,
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: uuidv4(),
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr,
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
