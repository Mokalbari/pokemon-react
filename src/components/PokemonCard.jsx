import './PokemonCard.modules.css'

function PokemonCard({ id, name, image, type }) {
  return (
    <div className="flex-column card" key={id}>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h3>
      <img src={image} alt={name} />
      <p>{type}</p>
    </div>
  )
}

export default PokemonCard
