import { RemovePlayer } from "./RemovePlayer"
import { Link } from "react-router-dom"

const cohortName = '2402-FTB-ET-WEB-FT'
const Base_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

export const PlayerCard = ({currentPlayer, playerDetails, setPlayerDetails}) => {

  const handleClick = () => {
   setPlayerDetails(currentPlayer)
  }

  return (
    <section className="puppies">
      <h3>{currentPlayer.name}</h3>
      <img className="pupImg" src={currentPlayer.imageUrl}></img>
      <button onClick={handleClick}>See Details</button>
      <Link to="/Details">See Details</Link>
      <RemovePlayer sadPuppy={currentPlayer} baseURL = {Base_API_URL} />
    </section> 
  )
}