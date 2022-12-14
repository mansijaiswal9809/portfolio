import { Grid } from '@mui/material'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Skill } from '../../utils/Contants'
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    // <Grid constainer spacing={2} sx={{width:'90vw',backgroundColor:"transparent"}}>
    //   {Skill.map((item)=>(
    //     <Grid item sx={{backgroundColor:"white", opacity:1}}   md={2} ><div><img src={item.url} alt="" width="200px" /></div><div>{item.name}</div> </Grid>
    //   ))}
    // </Grid>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center",width:"80vw", height:"100vh",color:"white"}}>
    <h1 style={{}}>Tech Stack</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 200px)", width:"80vw", alignContent:"center", justifyContent:"center", gap:"60px"}}>
      {
        Skill.map((item)=>(
          <AnimationOnScroll
          duration={2}
          animateIn="animate__zoomIn"
        >
          <div  style={{backgroundColor:"black", width:"200px", height:"200px",display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"10px"}}><div><img src={item.url} alt=""  width="150px"/></div><div>{item.name}</div></div>
        </AnimationOnScroll>
        ))
      }
    </div>
    </div>
  )
}

export default Skills
