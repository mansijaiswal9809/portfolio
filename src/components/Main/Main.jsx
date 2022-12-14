import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Content from '../Content/Content'
import Nav from '../Nav/Nav'
import Skills from '../skills/Skills'

const Main = () => {
  return (
    <Stack direction="row" spacing={4} sx={{width:'100vw', height:"100vh", position:"absolute",top:0}}>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<About/>}></Route>
        <Route exact path="/skills" element={<Skills/>}></Route>
      </Routes>
    </Stack>
  )
}

export default Main
