import { Container, Box, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavigationItem from "./components/Item/index";
import LogoutButton from "./components/LogoutButton";

const Navigation = () => {
  const { palette } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: palette.primary }}>
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <NavigationItem linkTitle="Home" linkPath="/" />
            <NavigationItem linkTitle="Login" linkPath="/login" />
            <NavigationItem linkTitle="Register" linkPath="/register" />
            <LogoutButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
