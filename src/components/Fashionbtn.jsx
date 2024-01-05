import React from 'react'

const Fashionbtn = ({buttonText,className}) => {
  return (
    <button className={`py-2 px-28 border-2  rounded-3xl font-pop font-semibold text-2xl bg-white hover:bg-black hover:drop-shadow-2xl hover:text-white mt-80 ml-3 ${className}`}>{buttonText}</button>
  )
}

export default Fashionbtn