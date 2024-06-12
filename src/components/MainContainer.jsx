import Filter from './Filter'
import PokemonList from './PokemonList'
import './MainContainer.modules.css'

function MainContainer() {
  return (
    <main className="container flex-row main">
      <Filter />
      <PokemonList />
    </main>
  )
}

export default MainContainer
