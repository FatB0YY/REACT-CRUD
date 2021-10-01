function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>
        My name is {name()}, surname - {surname}
      </h1>
      <a href={link}>link</a>
    </div>
  )
}

function App() {
  return <div className='App'>
      <WhoAmI name={() => {return 'John'}} surname='Smith' link='link.com'/>
      <WhoAmI name={() => {return 'Nick'}} surname='Gtew' link='link2.com'/>
  </div>
}
