import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Inputs.scss";
import { useState } from "react";

export default function Inputs({ handleLogin }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="inputs-container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="box"
      >
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          style={{ width: "23rem" }}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{ width: "23rem", marginTop: "2rem" }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
    </div>
  );
}
