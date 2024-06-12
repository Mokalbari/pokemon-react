import { useState } from 'react'
import('./PokemonTypes.modules.css')
import PropTypes from 'prop-types'

function PokemonType({ name, color = 'white', setPokemonType }) {
  const [toggle, setToggle] = useState(false)
  const handleToggleState = () => setToggle(!toggle)
  const handlePokemonType = () => setPokemonType({ name })

  return (
    <li>
      <button
        style={{
          borderLeft: `${color} 0.5rem inset`,
        }}
        onClick={[handleToggleState, handlePokemonType]}
        className={`${toggle && 'active'} pokemontype__buton`}
        type="button"
      >
        {name}
      </button>
    </li>
  )
}

PokemonType.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default PokemonType
