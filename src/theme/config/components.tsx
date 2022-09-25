import { Components } from "@mui/material/styles";

const components: Components = {
  MuiAppBar: {
    defaultProps: {
      sx: {
        backgroundColor: "none",
      },
    },
  },
  MuiContainer: {
    defaultProps: {},
  },

  MuiInput: {
    defaultProps: {
      sx: {
        color: "white",
        boxShadow: " 7px 9px 5px -6px rgba(0,0,0,0.68)",
        paddingLeft: ".5rem",
        backgroundColor: "#242424",
        borderRadius: ".2rem",
      },
    },
  },
};

export default components;
