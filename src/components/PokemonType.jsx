import { useState } from 'react'
import('./PokemonTypes.modules.css')
import PropTypes from 'prop-types'

function PokemonType({ name, color = 'white' }) {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <li>
      <button
        style={{
          borderLeft: `${color} 0.5rem inset`,
        }}
        onClick={handleClick}
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
