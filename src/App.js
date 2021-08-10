import React, { useState, useEffect } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll.js'
// import robots from './robots'
import './styles/App.css'



const App = () => {

  const [search, setSearch] = useState('')
  const [robots, setRobots] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) //  response.json() returns a promise!!!
      .then(data => setRobots(data))
  },[])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value)
  }

  if (!robots.length) {
    return <h1>Loading</h1>
  }
  else {
    return (
      <div className='tc'>
        <h1 className="f1">robofriends</h1>
        <SearchBox
          onSearchChange={handleSearchChange}
          value={search}
        />
        <Scroll>
          <CardList robots={robots} search={search}/>
        </Scroll>
      </div>
    )
  }
}


export default App
