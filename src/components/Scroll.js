import React from 'react'


const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
      {props.children}  {/* children are the components inside  */}
    </div>
  )

}


export default Scroll
