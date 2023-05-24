import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import { FC } from "react";
import { Button } from "@mui/material";

const Home: FC = () => {
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
          Home Page
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/about">
          Go to the about page
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
