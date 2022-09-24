import { Container, Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header/index";

interface Props {
  children: JSX.Element;
  customHeader: boolean;
}
const GlobalLayout = ({ children, customHeader }: Props) => {
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        boxShadow: "5px 10px 5px 0px rgba(0,0,0,0.57)",
        padding: "1rem",
        backgroundColor: "#161b22",
        borderRadius: ".5rem",
        minHeight: "100vh",
      }}
    >
      {customHeader ? <Box>Custom Header</Box> : <Header />}
      {children}
      <Footer />
    </Container>
  );
};

export default GlobalLayout;
