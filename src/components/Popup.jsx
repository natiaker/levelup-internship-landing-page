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
  marginTop: "30px",
  width: "940px",
  height: "100vh",
  color: "text.primary",
  bgcolor: "background.default",
  borderRadius: "10px",
  overflowY: "scroll",
  msOverflowStyle: "none" /* IE and Edge */,
  scrollbarWidth: "none" /* Firefox */,
  "&::webkitScrollbar": {
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
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
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
              component='img'
              image={process.env.PUBLIC_URL + "/assets/banner.jpg"}
              alt='banner'
            />
          </Card>
          <Box
            sx={{
              p: "43px",
            }}
          >
            <Typography id='modal-modal-title'>
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </Typography>
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2 }}
            >
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
