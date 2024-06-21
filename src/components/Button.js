import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-100 rounded-md font-medium'>{props.name}</button>
    </div>
  )
}

export default Button
