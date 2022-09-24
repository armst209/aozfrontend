import { Container, Typography, Box, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { palette } = useTheme();
  type NavigationItem = {
    linkPath: string;
    linkTitle: string;
  };
  const NavigationItem = ({ linkPath, linkTitle }: NavigationItem) => {
    return (
      <Link to={linkPath}>
        <Typography marginRight="1rem">{linkTitle}</Typography>
      </Link>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: palette.primary }}>
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <NavigationItem linkTitle="Home" linkPath="/" />
            <NavigationItem linkTitle="Login" linkPath="/login" />
            <NavigationItem linkTitle="Register" linkPath="/register" />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
