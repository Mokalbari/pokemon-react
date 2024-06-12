import { useEffect } from 'react'
import { useState } from 'react'
import PokemonCard from './PokemonCard'
import './PokemonList.modules.css'

function PokemonList({ pokemonType, setPokemonType }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=151',
        )
        const dataList = await response.json()
        const pokemonDetails = await Promise.all(
          dataList.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            return await res.json()
          }),
        )
        setPokemons(pokemonDetails)
      } catch (error) {
        throw new Error('Failed to fetch Pokémon data:', error)
      }
    }

    fetchPokemon()
  }, [])

  return (
    <div className="flex-column list">
      <h2 className="list__title">Liste des Pokémon</h2>
      <div className="list__cards">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
