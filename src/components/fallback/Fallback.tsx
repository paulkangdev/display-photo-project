import { Container, Typography } from "@mui/material";

function Fallback(props: { message: string }) {
  const { message } = props;
  return (
    <Container component="main">
      <Typography
        variant="h5"
        noWrap
        component="p"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {message}
      </Typography>
    </Container>
  );
}
export default Fallback;
