import React from "react";
import { Typography, Box } from "@mui/material";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <Typography variant="h6" component="p">
        Copyright @ Aaron Armstrong
        <Box>{currentDate}</Box>
      </Typography>
    </footer>
  );
};

export default Footer;
