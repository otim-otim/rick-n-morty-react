import React from 'react'

interface Props {
  label: 'Next' | 'Previous'
}
const Button = ({label} : Props) => {
  return (
    <>
       
        <button className="btn btn-primary">{label}</button>
    </>
  )
}

export default Button