import { Grid } from "@mui/material";
import ListUsers from "./Components/Users/ListUsers";
import ListOperation from "./Components/Operations/ListOperation";

const Index = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <ListOperation />
    </Grid>
    <Grid item xs={6}>
      <ListUsers />
    </Grid>
  </Grid>
);

export default Index;
