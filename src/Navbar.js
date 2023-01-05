import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const amount = useSelector(state=>state.amount)
  const id = useSelector(state=>state.id)
  return (
    <div className='cantainer'>
<ul className='nav'>
  <li className='nav-item'>
    <a className='nav-link active' aria-current='page' href=''>Active</a>
  </li>
  <li className='nav-item'>
    <a className='nav-link'  href=''>Link</a>
  </li>
  <li className='nav-item'>
    <a className='nav-link' href=''>Link</a>
  </li>
  
  <li className='nav-item'>
    <a className='nav-link disabled' href=''>user id-{id}</a>
  </li>
</ul>

    </div>
  )
}
