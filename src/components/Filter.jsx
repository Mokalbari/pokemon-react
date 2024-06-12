import { useState } from 'react'
import data from '../data/pokemonType.json'
import './Filter.modules.css'

function Filter({ setPokemonType, pokemonType }) {
  return (
    <aside className="filter">
      <h2 className="filter__title">Filtre</h2>
      <ul className="filter__list grid">
        {data.PokemonType.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <button
                style={{
                  borderLeft: `${pokemon.background_color} 0.5rem inset`,
                }}
                className={
                  pokemonType.toLowerCase() === pokemon.name.toLowerCase()
                    ? 'active pokemontype__buton'
                    : 'pokemontype__buton'
                }
                type="button"
                onClick={() => setPokemonType(pokemon.name)}
              >
                {pokemon.name}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Filter
