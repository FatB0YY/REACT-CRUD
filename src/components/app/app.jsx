import { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees/employees-list/employees-list'
import EmployeesAddForm from '../employees/employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'John',
          salary: 356,
          increase: false,
          rise: true,
          id: uuidv4(),
        },
        {
          name: 'Nick',
          salary: 3742,
          increase: true,
          rise: false,
          id: uuidv4(),
        },
        {
          name: 'Alex',
          salary: 3444,
          increase: false,
          rise: false,
          id: uuidv4(),
        },
      ],
      term: '',
      filter: 'all',
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
    if (!(name.length >= 3 && salary !== '')) return

    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: uuidv4(),
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr,
      }
    })
  }

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`)
    this.setState(({ data }) => ({
      // мы возвращаем новый объект. у которого  будет св-во data
      // у которого будет формироваться новый массив
      // когда идет перебор этих объектов, мы делаем проверку
      // если id совпали, значит мы нашли нужный нам объект
      // значит мы будем возвращать объект, который содержт все старые св-ва и обнов increase
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item
      }),
    }))
  }

  onToggleIncease = (id) => {
    console.log(`Incease this ${id}`)
    // 1 вариант
    // this.setState(({data}) => {
    //   const idx = data.findIndex((elem) => elem.id.toString() === id.toString())
    //   // мы создаем копию, чтобы что то поменять
    //   const old = data[idx]
    //   // не нарушает иммутабельность
    //   const newItem ={...old, increase: !old.increase}
    //   const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]
    //   return {
    //     data: newArray
    //   }
    // })

    // 2 вариант
    this.setState(({ data }) => ({
      // мы возвращаем новый объект. у которого  будет св-во data
      // у которого будет формироваться новый массив
      // когда идет перебор этих объектов, мы делаем проверку
      // если id совпали,  значит мы нашли нужный нам объект
      // значит мы будем возвращать объект, который содержт все старые св-ва и обнов increase
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item
      }),
    }))
  }

  getCount = () => {
    this.setState(({ data }) => {
      console.log(data)
    })
  }

  // term - строчка по которой искать
  // items - где искать
  searchEmp = (items, term) => {
    if (term.length === 0) return items
    return items.filter((item) => {
      // возвращаем только те эл. которые проходят эту проверку
      // берем name у каждого эл
      // выполняем indexOf и пытаемся найти кусочек строки
      // если не найдено вернется -1, иначе индекс где была найдена подстрока
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term: term })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise)
      case 'moreThen1000':
        return items.filter((item) => item.salary >= 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state
    const count = this.state.data.length

    const increased = this.state.data.filter(
      (item) => item.increase === true
    ).length

    // сначала идет фильтрация по поиску, а потом по фильтрам
    const visibleData = this.filterPost(this.searchEmp(data, term), filter) 

    return (
      <div className='app'>
        <AppInfo count={count} increased={increased} />

        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncease={this.onToggleIncease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App

// чайковский
