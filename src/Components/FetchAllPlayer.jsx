import { useEffect, useState} from 'react';
import { PlayerCard } from './PlayerCard';
import { CardDetails } from './CardDetails';

const FetchAllPlayer = ({baseURL}) => {
  const [allPlayersList, setAllPlayersList] = useState([]);
  const [playerDetails, setPlayerDetails] = useState({});

  useEffect(() => {
    allPlayers()
  }, []);

    const allPlayers = async() => {
      try {
        const response = await fetch (`${baseURL}/players`);
        const json = await response.json();
        setAllPlayersList(json.data.players);
        console.log(allPlayersList)
      } catch (error) {
        console.log('Error: ', error);
      }
    };

  return (
    playerDetails.name ? <CardDetails playerDetails={playerDetails} setPlayerDetails={setPlayerDetails}/> :
    <>
      <h2>Players</h2>
      
      <section id="main">
      {
        allPlayersList.map((currentPlayer) => {
          return (
            <PlayerCard key = {currentPlayer.id} currentPlayer={currentPlayer} setPlayerDetails={setPlayerDetails} playerDetails={playerDetails}/>
          )
        })
      }
      </section>
    </>
  )
}

export default FetchAllPlayer