import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to='/catfacts'>Cat</NavLink>
      <NavLink to='/fox'>Fox</NavLink>
    </div>
  )
}

export default Nav