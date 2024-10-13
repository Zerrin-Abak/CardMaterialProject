import "./App.css";
import CardAppbar from "./CardAppbar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Flowers from "./images/flowers.jpg";
import Summer from "./images/summer.jpg";
import Sunset from "./images/sunset.jpg";
import Winter from "./images/winter.jpg";
import Cards from "./Cards";

function App() {
  return (
    <>
      <CardAppbar />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{marginTop:"100px", justifyContent:"center"}}>
          <Grid item xs={12} md={6} lg={3}>
           <Cards
           image={Flowers}
           title={"Flowers"}
           description= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"}
           />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Cards
           image={Summer}
           title={"Summer"}
           description= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"}
           />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Cards
           image={Sunset}
           title={"Sunset"}
           description= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"}
           />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Cards
           image={Winter}
           title={"Winter"}
           description= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"}
           />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
