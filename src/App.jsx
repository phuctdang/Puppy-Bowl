import './App.css'
import FetchAllPlayer from './Components/FetchAllPlayer.jsx'
import { AddPlayerForm } from './Components/AddPlayerForm.jsx'
import { CardDetails } from './Components/CardDetails.jsx'
import { Routes, Route, Link} from 'react-router-dom'

const cohortName = '2402-FTB-ET-WEB-FT'
const Base_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

function App() {

  return (
    <>
     <h1>Puppy Bowl</h1>

     <FetchAllPlayer baseURL = {Base_API_URL}/>
     <AddPlayerForm baseURL = {Base_API_URL}/>

     <Routes>
        <Route path="/Details" element={<CardDetails />}></Route>
     </Routes>
    </>
  )
}

export default App