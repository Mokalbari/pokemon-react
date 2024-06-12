import Filter from './Filter'
import PokemonList from './PokemonList'
import './MainContainer.modules.css'
import { useState } from 'react'

function MainContainer() {
  const [pokemonType, setPokemonType] = useState('')
  return (
    <main className="flex-row main">
      <Filter pokemonType={pokemonType} setPokemonType={setPokemonType} />
      <PokemonList pokemonType={pokemonType} setPokemonType={setPokemonType} />
    </main>
  )
}

export default MainContainer
