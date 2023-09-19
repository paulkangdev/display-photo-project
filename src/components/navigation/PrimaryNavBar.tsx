import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import { useState } from "react";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const pages = [{ id: 1, name: "Photos", href: "./" }];

function PrimaryNavBar(props: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { darkMode, setDarkMode } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Toolbar disableGutters>
            <ComputerIcon />
            <Link to="/about">
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  mx: 1,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                PKANG DEV
              </Typography>
            </Link>
            <Link to="/about">
              <Typography
                variant="h5"
                noWrap
                component="span"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                PKANG DEV
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  flexDirection: "row-reverse",
                  md: "none",
                },
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={`menu-item-${page.id}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Link to={page.href}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "row-reverse",
                },
              }}
            >
              {pages.map((page) => (
                <Link to={page.href}>
                  <Typography
                    key={`page-link-page.id`}
                    textAlign="center"
                    component="span"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                md: "flex",
                flexDirection: "row-reverse",
              },
            }}
          >
            <ToggleButtonGroup
              exclusive
              value={darkMode}
              onChange={(_event, darkModeValue) => {
                console.log(darkModeValue);
                if (darkModeValue !== null) {
                  setDarkMode(darkModeValue);
                }
              }}
              aria-label="light or dark mode toggle"
              sx={{ mx: 2 }}
            >
              <ToggleButton value={false} aria-label="set light mode">
                <LightModeIcon>Light</LightModeIcon>
              </ToggleButton>
              <ToggleButton value={true} aria-label="set dark mode">
                <DarkModeIcon>Dark</DarkModeIcon>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}

export default PrimaryNavBar;
