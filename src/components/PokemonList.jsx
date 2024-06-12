import { useEffect } from 'react'
import { useState } from 'react'
import './PokemonList.modules.css'

function PokemonList({ pokemonType }) {
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
        {pokemons
          .filter(
            pokemon =>
              pokemonType === '' ||
              pokemon.types.some(
                type => type.type.name === pokemonType.toLowerCase(),
              ),
          )
          .map(pokemon => (
            <div className="flex-column card" key={pokemon.id}>
              <h3>
                {pokemon.name.charAt(0).toUpperCase() +
                  pokemon.name.slice(1).toLowerCase()}
              </h3>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.types[0].type.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PokemonList
