import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";
import TabComponent from "./TabComponent";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginTop: { xs: "104px", sm: "30px" },
  paddingTop: { xs: "204px", sm: "0" },
  minWidth: { xs: "320px", sm: "500px", md: "600px" },
  width: { xs: "100%", sm: "90%", md: "80%", lg: "60%" },
  height: "100vh",
  color: "text.primary",
  bgcolor: "background.default",
  borderRadius: "10px",
  overflowY: "scroll",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

function Popup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            display={{ xs: "flex", sm: "none" }}
            justifyContent="space-between"
            alignItems="center"
            px={2}
            mb={2}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="logo"
              width="24px"
              height="24px"
            />
            <Box>
              <Button sx={{ color: "text.primary" }}>Sign Up</Button>
              <Button
                variant="contained"
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
          <Box
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: "background.default",
              display: { xs: "none", sm: "block" },
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                transform: "translate(20%, 20%)",
              }}
            />
          </Box>
          <Card>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/assets/banner.jpg"}
              alt="banner"
            />
          </Card>
          <Box
            sx={{
              p: { xs: "16px", sm: "43px" },
            }}
          >
            <Typography id="modal-modal-title">
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              მოხვდი პოკერის ფესტივალზე მალტაში
            </Typography>
            <TabComponent />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Popup;
