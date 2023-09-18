import { Container } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrimaryNavBar from "./components/navigation/PrimaryNavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Container component="nav">
        <PrimaryNavBar />
      </Container>
      <Container sx={{ paddingTop: "10px" }} component="main">
          <Outlet />
      </Container>
    </>
  );
}

export default App;
