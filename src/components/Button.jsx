import React from 'react'

const Button = ({buttonText,className}) => {
  return (
   <button className={`py-3 px-7 border-2 border-borderColor rounded-xl font-pop font-semibold text-2xl bg-borderColor hover:bg-headerBg hover:drop-shadow-2xl ${className}`}>{buttonText}</button>
  )
}

export default Button