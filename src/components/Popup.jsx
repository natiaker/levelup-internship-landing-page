import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";
import BasicTabs from "./TabComponent";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "940px",
  color: "text.primary",
  bgcolor: "background.default",
  borderRadius: "10px",
};

function Popup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
            >
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </Typography>
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2 }}
            >
              მოხვდი პოკერის ფესტივალზე მალტაში
            </Typography>
            {/* აქ იქნება Tabs component */}
            <BasicTabs />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;
