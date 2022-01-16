import { Grid } from "@mui/material";
import ListUsers from "./Components/Users/ListUsers";

const ListOperation = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}>
      <ListUsers />
    </Grid>
  </Grid>
);

export default ListOperation;
