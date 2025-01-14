import React from 'react'

const Button = ({name}) => {

  return (
    <>
    <button style={{border:'1px solid white',color:'white',fontSize:'18px',padding:"10px 20px",background:"none"}}>{name}</button>
    </>
  )
}

export default Button