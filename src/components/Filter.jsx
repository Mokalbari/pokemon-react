import PokemonType from './PokemonType'
import data from '../data/pokemonType.json'
import './Filter.modules.css'

function Filter() {
  return (
    <aside className="filter">
      <h2 className="filter__title">Filtre</h2>
      <ul className="filter__list grid">
        {data.PokemonType.map(pokemon => {
          return (
            <PokemonType
              type="button"
              name={pokemon.name}
              key={pokemon.id}
              color={pokemon.background_color}
            />
          )
        })}
      </ul>
    </aside>
  )
}

export default Filter
