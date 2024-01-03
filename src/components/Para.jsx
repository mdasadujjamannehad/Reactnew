import React from 'react'

const Para = ({className,paraText}) => {
  return (
    <p className={`font-pop text-2xl font-normal  ${className}`}>{paraText}</p>
  )
}

export default Para