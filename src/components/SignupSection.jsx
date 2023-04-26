import { Box, Button } from "@mui/material";
import React from "react";

const SignupSection = () => {
  return (
    <Box
      display={{ xs: "flex", sm: "none" }}
      justifyContent='space-between'
      alignItems='center'
      px={2}
      mb={2}
    >
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        alt='logo'
        width='24px'
        height='24px'
      />
      <Box>
        <Button sx={{ color: "text.primary" }}>Sign Up</Button>
        <Button
          variant='contained'
          sx={{
            color: "text.primary",
            bgcolor: "background.active",
            ":hover": { bgcolor: "background.active" },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignupSection;
