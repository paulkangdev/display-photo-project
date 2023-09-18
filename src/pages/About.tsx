import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function About() {
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
        Paul Kang
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h6"
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
          Technologies
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              {" "}
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Front-end
              </Typography>
              <Typography variant="body1" component="p">
                Used React, Redux, Angular in production-grade websites,
                maintained NextJS framework for helping other developers deploy
                websites quickly
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              {" "}
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                AWS
              </Typography>
              <Typography variant="body1" component="p">
                Implemented AWS Lambda, S3, RDS, DynamoDB, API Gateway,
                CloudFront, Route53, and various other AWS technologies with AWS
                CDK in production environments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              {" "}
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Back-end
              </Typography>
              <Typography variant="body1" component="p">
                Used Java Spring Boot for maintaining and improving RESTful
                API&apos;s, API Gateway and Lambda to handle API routing for RDS
                database
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h6"
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
          Strengths
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              {" "}
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Fast learner
              </Typography>
              <Typography variant="body1" component="p">
                I have the ability to rapidly implement new technologies needed
                or suggested by the job at hand
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Curious
              </Typography>
              <Typography variant="body1" component="p">
                Interested in personal growth: learning as much as possible,
                becoming a coach and speaker
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Results-oriented
              </Typography>
              <Typography variant="body1" component="p">
                Balances learning and experimenting in order to deliver modern,
                effective results in a timely manner
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ height: "100%", maxWidth: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mr: 2,
                  my: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Community-oriented
              </Typography>
              <Typography variant="body1" component="p">
                Interested in learning and improving so I can encourage personal
                growth in community and team members
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
