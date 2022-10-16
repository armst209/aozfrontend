import React from "react";
import { Typography, Box } from "@mui/material";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <Typography variant="h6" component="div">
        Copyright @ Aaron Armstrong
        <Box component="p">{currentDate}</Box>
      </Typography>
    </footer>
  );
};

export default Footer;
