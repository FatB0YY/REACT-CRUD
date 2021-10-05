import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggleIncease, onToggleRise }) => {
  const elements = data.map((item) => {
    // return <EmployeesListItem name={item.name} salary={item.salary} />
    const { id, ...itemProps } = item
    return (
      <EmployeesListItem
        onToggleIncease={() => onToggleIncease(id)}
        onToggleRise={() => onToggleRise(id)}
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      />
    )
  })

  return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeesList
