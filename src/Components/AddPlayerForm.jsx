import { useState } from 'react'

export const AddPlayerForm = ({baseURL}) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addPlayer = async(e) => {
    e.preventDefault()
    const puppyId = Math.floor(Math.random() * 1000)
    try {
      const response = await fetch (`${baseURL}/players`,
        {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
          name,
          breed,
          status,
          imageUrl,
          id: puppyId
          })
        })
      const result = await response.json();
      console.log(result);
      } catch (error) {console.log(`Error: `, error)}
    }

  return (
    <>
      <form onSubmit={addPlayer}>
        <label>
          Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Breed: 
          <input type="text" values={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>
        <label>
          Status: 
          <input type="text" values={status} onChange={(e) => setStatus(e.target.value)}/>
        </label>
        <label>
          Image URL
          <input type="text" values={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label>
        <button>Add Player</button>
      </form>
    </>
  );
};