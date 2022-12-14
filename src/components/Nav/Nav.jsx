import { Container, Stack } from '@mui/system'
import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <Stack className="stack" justifyContent="center" alignItems='center' spacing={4}>
      <NavLink  to="/"><div></div></NavLink>
      <NavLink to="/skills"><div></div></NavLink>
      <NavLink to="/"><div></div></NavLink>
      <NavLink to="/"><div></div></NavLink>
    </Stack>
  )
}

export default Nav
