import React from 'react'

const List = ({href,className,menuName}) => {
  return (
    <li><a href={href} className={`text-2xl font-semibold font-pop ${className}`}>{menuName}</a></li>
  )
}

export default List