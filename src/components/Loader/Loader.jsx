import React from "react";
import { Box, Stack } from "@mui/material";
import "./loader.css"

const Loader = () => {
  return (
    <Box className="box"
      sx={{
        backgroundColor: "black",
        opacity: 0.7,
        width: "100vw",
        height: "100vh",
        fontSize: "200px",
        color: "red",
        display:"grid",
        placeItems:"center",
        fontFamily: "'Rubik Vinyl', 'cursive'",
        // zIndex:999
      }}
    >
      <Stack direction="row" spacing="4" justifyContent="center" sx={{height:"300px"}}>
        <Box className="M">M</Box>

        <Box className="J" sx={{overflowY:"hidden"}}>j</Box>
      </Stack>
    </Box>
  );
};

export default Loader;
