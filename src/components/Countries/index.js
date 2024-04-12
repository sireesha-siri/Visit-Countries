import './index.css'

const Countries = props => {
  const {countryDetails, changeCard} = props
  const {id, name, isVisited} = countryDetails

  const changeVisited = () => {
    changeCard(id)
  }

  return (
    <li>
      <div className="country-item">
        <p>{name}</p>
        {!isVisited ? (
          <button
            type="button"
            className="not-visited-button-styling"
            onClick={changeVisited}
          >
            Visit
          </button>
        ) : (
          <p className="visit-button-styling">Visited</p>
        )}
      </div>
    </li>
  )
}

export default Countries
