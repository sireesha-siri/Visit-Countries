import './index.css'

const CountriesVisited = props => {
  const {visitedDetails, deleteCard} = props
  const {id, name, imageUrl} = visitedDetails

  const removeButton = () => {
    deleteCard(id)
  }

  return (
    <li>
      <div className="visited-countries">
        <img src={imageUrl} alt="thumbnail" />

        <div className="mini-card">
          <p className="visited-country ">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={removeButton}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default CountriesVisited
