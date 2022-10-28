import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Snackbar,
  Toolbar,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SocialNav() {
  const [comingSoon, setComingSoon] = useState(false);

  const handleComingSoon = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setComingSoon(false);
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#c7ab59",
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense">
            <Box>
              <Button
                component={"a"}
                href="mailto:sales@laurentecapital.com"
                startIcon={<EmailOutlinedIcon />}
                sx={{ color: "white", textTransform: "lowercase" }}
              >
                sales@laurentecapital.com
              </Button>
            </Box>
            <Box justifyContent={"end"} sx={{ flexGrow: 1, display: "flex" }}>
              <IconButton
                onClick={() => {
                  setComingSoon(true);
                }}
              >
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setComingSoon(true);
                }}
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <button
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  fontFamily: "Roboto",
                  height: "36px",
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setComingSoon(true);
                }}
              >
                Make an Appointment
              </button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Snackbar
        open={comingSoon}
        autoHideDuration={1000}
        onClose={handleComingSoon}
        message="Coming soon!"
        action={
          <Button onClick={() => setComingSoon(false)} sx={{ color: "white" }}>
            OK
          </Button>
        }
      />
    </React.Fragment>
  );
}
