import React from 'react'

const Heading = ({headingText, className}) => {
  return (
   <h1 className={`font-pop text-6xl font-semibold  ${className}`}>{headingText}</h1>
  )
}

export default Heading