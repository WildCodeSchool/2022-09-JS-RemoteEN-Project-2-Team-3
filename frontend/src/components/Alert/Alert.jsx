import React from "react";
import { Alert, Stack, AlertTitle } from "@mui/material";

export default function showAlert({ onCloseHandler }) {
  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={onCloseHandler}>
        <AlertTitle>Error!</AlertTitle>
        Wrong city!
      </Alert>
    </Stack>
  );
}
