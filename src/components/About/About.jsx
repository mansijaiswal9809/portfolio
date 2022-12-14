import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import "./about.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  const [s, setS]= useState(0)
  return (
      <Stack
    
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ height: "100vh", width: "80vw", textAlign: "left", backgroundColor:"transparent" }}
      >
        <AnimationOnScroll
          duration={2}
          delay={5000}
          animateIn="animate__fadeInLeftBig"
          afterAnimatedIn={() => setS((c) => c + 1)}
        >
          <Stack className="stack" sx={{ width: "60%", backgroundColor:"black", padding:"60px" }}>
            <Typography
              sx={{ color: "#fa5a5a", fontFamily: "kenia, cursive;" }}
              variant="h6"
            >
              Hi, I am
            </Typography>
            <Typography
              className="typo"
              variant="h2"
              sx={{ fontFamily: "kenia, cursive;" ,color:"white" }}
            >
              Mansi Jaiswal
            </Typography>
            <Typography
              className="typo"
              sx={{ color: "#fa5a5a", fontFamily: "kenia, cursive;" }}
              variant="h3"
            >
              Web Developer
            </Typography>
            <Typography sx={{ fontFamily: "kenia, cursive;" ,color:"white"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores dolores molestias possimus nihil pariatur assumenda
              minima sed excepturi quos ad impedit culpa, voluptatibus, iure
              quidem, minus exercitationem necessitatibus non consequatur
              sapiente quibusdam odit. Et deleniti delectus, illo fugit odit
              fugiat suscipit eveniet temporibus error nemo inventore ab libero
              aliquid ratione iusto mollitia cumque veritatis atque praesentium
              dolore possimus ipsa odio. Reprehenderit laboriosam temporibus
              impedit accusamus quam dolore error perferendis ut ullam iure odit
              ipsum magnam dicta corrupti
            </Typography>
          </Stack>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={2}
          delay={5000}
          animateIn="animate__fadeInRightBig"
        >
          <div className="imageDiv" >
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Zck_zhbBUys-FaSlLz739gHaJl&pid=Api&P=0"
              width="100%"
              alt="mansi"
            />
          </div>
        </AnimationOnScroll>
      </Stack>
  );
};

export default About;
