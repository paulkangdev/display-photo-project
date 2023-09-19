import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrimaryNavBar from "./components/navigation/PrimaryNavBar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="nav">
        <PrimaryNavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      </Container>
      <Container sx={{ paddingTop: "10px" }} component="main">
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
