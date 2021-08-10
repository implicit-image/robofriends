import React from 'react'
import 'tachyons'


const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma3 grow'>
      <img src={`https://robohash.org/${id}?200x200`} alt='user avatar'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
