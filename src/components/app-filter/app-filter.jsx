import './app-filter.css'

const AppFilter = (props) => {
  const btnsData = [
    { name: 'all', label: 'Все сотрудники', colored: false },
    { name: 'rise', label: 'На повышение', colored: false },
    { name: 'moreThen1000', label: 'З/П больше 1000$', colored: true },
  ]

  const btns = btnsData.map((btn) => {
    const active = props.filter === btn.name
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    const style = btn.colored ? { color: 'red' } : null
    return (
      <button
        onClick={() => props.onFilterSelect(btn.name)}
        style={style}
        type='button'
        key={btn.name}
        className={`btn ${clazz}`}
      >
        {btn.label}
      </button>
    )
  })

  return (
    <div className='btn-group'>
      
      {btns}
      {/* <button type='button' className='btn btn-light'>
        Все сотрудники
      </button>
      <button type='button' className='btn btn-outline-light'>
        На повышение
      </button>
      <button type='button' className='btn btn-outline-light'>
        З/П больше 1000$
      </button> */}
    </div>
  )
}

export default AppFilter
