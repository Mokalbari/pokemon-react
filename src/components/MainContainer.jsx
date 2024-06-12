import Filter from './Filter'
import PokemonList from './PokemonList'
import './MainContainer.modules.css'
import { useState } from 'react'

function MainContainer() {
  const [pokemonType, setPokemonType] = useState('')
  return (
    <main className="flex-row main">
      <Filter setPokemonType={setPokemonType} pokemonType={pokemonType} />
      <PokemonList pokemonType={pokemonType} />
    </main>
  )
}

export default MainContainer
