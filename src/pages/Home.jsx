import pokemonArt from '../assets/pokemon_illustration.jpg'
import { Link } from 'react-router-dom'
import './Home.modules.css'

function Home() {
  return (
    <main>
      <h1>Pokedex Digital</h1>
      <img src={pokemonArt} alt="Pokemons representing dracofeu and +" />
      <button type="button">
        <Link to={'./pokedex'}>Explorer le pokedex</Link>
      </button>
    </main>
  )
}

export default Home
