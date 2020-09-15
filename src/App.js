import React from "react";
import "semantic-ui-css/semantic.min.css";
import Conversor from "./components/conversor/index";
import { Grid } from "semantic-ui-react";
import './App.css';

function App() {
  const gridStyle = {
    display: "flex",
    width: "1500px",
  };

  return (
    <Grid style={gridStyle} columns={6} centered>
      <Grid.Row>
        <Grid.Column>
          <Conversor from="USD" to="BRL"></Conversor>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;