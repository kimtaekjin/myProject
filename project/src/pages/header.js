import React from 'react'
import '../pages/css/header.css'

const header = () => {
  return (
<div className='black-nav'>
    <div className='Logo'>CL</div>
    <div className='menu'>  
        <div className='header-list'>myList</div>
        <div className='header-list'>board</div>
        <div className='header-list'>Notice</div>
        <div className='header-list'>magazine</div>
    </div>

    <div className='login'>
        Login
    </div>
</div>
  )
}

export default header