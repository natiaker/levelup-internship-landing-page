import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";
import TabComponent from "./TabComponent";
import SignupSection from "./SignupSection";
import CloseBtn from "./CloseBtn";
import PlayBtn from "./PlayBtn";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginTop: { xs: "24px", sm: "30px" },
  paddingTop: { xs: "10px", sm: "0" },
  minWidth: { xs: "320px", sm: "500px", md: "600px" },
  width: { xs: "100%", sm: "90%", md: "70%", lg: "940px" },
  height: "94vh",
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
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          color: "text.primary",
          bgcolor: "background.active",
          ":hover": { bgcolor: "background.active" },
        }}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <SignupSection />
          <div style={{ display: "flex", position: "sticky", top: 0 }}>
            <Box
              display={{ xs: "none", sm: "inline-flex" }}
              alignItems="center"
              position="absolute"
              top="16px"
              left="16px"
              bgcolor="#25292B"
              borderRadius="35px"
            >
              <Box bgcolor="#ffffff1d" py="5px" px="10px" borderRadius="13px">
                <Typography fontSize="13px">სლოტები</Typography>
              </Box>
              <Typography fontSize="13px" px={1}>
                10 იანვარი - 12 მარტი
              </Typography>
            </Box>

            <CloseBtn handleClose={handleClose} />
          </div>
          <Card>
            <CardMedia
              component="img"
              image={process.env.PUBLIC_URL + "/assets/banner.jpg"}
              alt="banner"
            />
          </Card>
          <Box
            display={{ xs: "inline-flex", sm: "none" }}
            alignItems="center"
            borderRadius="35px"
            pt={1}
            px="10px"
          >
            <Box bgcolor="#ffffff1d" py="5px" px="10px" borderRadius="13px">
              <Typography fontSize="13px">სლოტები</Typography>
            </Box>
            <Typography fontSize="13px" px={1}>
              10 იანვარი - 12 მარტი
            </Typography>
          </Box>
          <Box
            sx={{
              p: { xs: "16px", sm: "43px" },
            }}
          >
            <Typography id="modal-modal-title" fontWeight="900">
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              მოხვდი პოკერის ფესტივალზე მალტაში
            </Typography>
            <TabComponent />
          </Box>
          <PlayBtn />
        </Box>
      </Modal>
    </>
  );
}

export default Popup;
