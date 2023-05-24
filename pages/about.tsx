import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/components/Link";
import { FC } from "react";

const About: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        flexDirection="column"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          About Page
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the home page
        </Button>
      </Box>
    </Container>
  );
};

export default About;
