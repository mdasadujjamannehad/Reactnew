import React from 'react'

const Headingbtn = ({buttonText,className}) => {
  return (
    <button className={`py-6 px-24 bg-black text-white text-2xl rounded-xl ${className}`}>{buttonText}</button>
  )
}

export default Headingbtn