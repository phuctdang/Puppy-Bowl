export const CardDetails = ({playerDetails, setPlayerDetails}) => {
  return (
  <>
    <p>{playerDetails.breed}</p>  
    <p>Status: {playerDetails.status}</p>
    <button onClick={() => setPlayerDetails({})}>Return</button>
  </>  
  )
}