import React from 'react'

interface Props {
  label: 'Next' | 'Previous'
  // clickFunction : Function 
}
const Button = ({label} : Props) => {


  return (
    <div>
       
        <button className="btn btn-primary" >{label}</button>
    </div>
  )
}

export default Button