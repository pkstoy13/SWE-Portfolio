import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="text-white bg-gray-700 "
        color="inherit"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Philip Stoyanov
          </Typography>
          <Button color="inherit">Overview</Button>
          <Button color="inherit">Education</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Interests</Button>
          <Button color="inherit">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
