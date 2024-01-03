import React from 'react'

const Headings = ({headingsText,className}) => {
  return (
    <h3 className={` ${className}`}>{headingsText}</h3>
  )
}

export default Headings