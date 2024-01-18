import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export function LinearColor() {
  return (
    <Stack sx={{ width: "100%", color: "grey.700" }} spacing={2}>
      <LinearProgress color="inherit" />
    </Stack>
  );
}
