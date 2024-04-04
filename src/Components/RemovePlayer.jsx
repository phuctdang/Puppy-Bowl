export const RemovePlayer = ({sadPuppy, baseURL}) => {
  const removePup = async() => {
    try {
      const response = await fetch (`${baseURL}/players/${sadPuppy.id}`,
        {
         method: "DELETE",
        })
        const result = await response.json();
      } catch (error) {console.log('Error: ', error)}
    }

    return (
      <>
        <button onClick={removePup}>Remove Player</button>
      </>
    )
  }