import React from 'react'
import Card from './Card'

const CardList = ({ robots, search }) => {
  return (
    <>
      {robots
       .filter(robot => robot.name
                            .toLowerCase()
                            .includes(search.toLowerCase()))
       .map(robot => {
         return <Card name={robot.name} email={robot.email} id={robot.id} key={robot.id}/>
       })
      }
    </>
  )
}

export default CardList
