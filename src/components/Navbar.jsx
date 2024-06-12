import pokeball from '/public/pokeball.png'
import './Navbar.modules.css'

function Navbar() {
  return (
    <header className="header">
      <img src={pokeball} alt="Une pokeball" />
      <h1>Pokedex</h1>
    </header>
  )
}

export default Navbar
