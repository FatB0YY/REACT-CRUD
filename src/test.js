// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>
//         My name is {name()}, surname - {surname}
//       </h1>
//       <a href={link}>link</a>
//     </div>
//   )
// }

import { Component } from 'react'

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 18,
      text: '+++',
      position: '',
    }
  }

  nextYear = () => {
    console.log('+++')
    // мы не можем напрямую менять состояние
    // this.state.years++
    this.setState((state) => ({
      years: state.years + 1,
    }))
  }

  commitInputChanges = (event, color) => {
    console.log(color);
    const target = event.target.value
    console.log(target)
    this.setState({
      position: target.value,
    })
    // жесткая привязка, чтобы контекст не терялся, если мы используем как обычные методы !!!
    // this.nextYear = this.nextYear.bind(this)
  }

  render() {
    const { name, surname, link, text } = this.props
    const { years, position } = this.state

    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years}, position -{' '}
          {position}
        </h1>
        <a href={link}>link</a>

        <form>
          <span>Введите должность</span>
          <input type='text' onChange={(event) => this.commitInputChanges(event, 'some color')} />
        </form>
      </div>
    )
  }
}

/*
1. у компонента может быть внутр состояние, которое динам меняется
2. оно может быть как у классовых так и функц компонентов
3. state можно менять только через setState
4. setState это асинхр операция
5. setState мы можем менять только то, что нам нужно
*/

function App() {
  return (
    <div className='App'>
      <WhoAmI
        name={() => {
          return 'John'
        }}
        surname='Smith'
        link='link.com'
      />
      <WhoAmI
        name={() => {
          return 'Nick'
        }}
        surname='Gtew'
        link='link2.com'
      />
    </div>
  )
}
