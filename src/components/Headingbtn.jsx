import React from 'react'

const Headingbtn = ({buttonText,className}) => {
  return (
    <button className={`py-6 px-24 bg-black font-semibold hover:border text-white text-2xl rounded-xl hover:bg-white hover:drop-shadow-2xl hover:text-black ${className}`}>{buttonText}</button>
  )
}

export default Headingbtn