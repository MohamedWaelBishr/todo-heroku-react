import React from "react";
import {
  Container,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

const Header = () => {
  return (
    <>
      <CssBaseline position="relative" />
      <AppBar>
        <Toolbar>
          <AssignmentIcon style={{ marginRight: "1%" }} />
          <Typography variant="h5">
            <span>Task To-Do App</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <>
        <div>
          <Container style={{ marginTop: "2%", marginBottom: "5%" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome To Task To-Do App
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Getting all those tasks out of your head and onto your to-do list
              (no matter where you are or what device you use).
            </Typography>
          </Container>
        </div>
      </>
    </>
  );
};

export default Header;
