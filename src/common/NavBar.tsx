import { Image } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/rapha.uy_favicon_r_blanco.png";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../context/notification.context";

export const NavBar: React.FC<{}> = () => {
  const navigate= useNavigate()
  const { getSuccess }= useNotification()

  const handleSignIn = () => {
    getSuccess("Registration is currently deactivated")
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Avatar alt="logo" src={logo} onClick={() => navigate("/")} 
                      sx={{ cursor: 'pointer', '&:hover': {cursor: 'pointer'} }} />
                </Grid>
                <Stack spacing={1} direction="row">
                    <Grid item><Button variant="outlined" onClick={() => navigate("login")}>Login</Button></Grid>
                    <Grid item><Button variant="outlined" onClick={handleSignIn}>Sign-in</Button></Grid>
                </Stack>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
