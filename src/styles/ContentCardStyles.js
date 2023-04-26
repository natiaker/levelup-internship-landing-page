import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledMainTitle = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    bgcolor: "#2C3234", 
    height: "70px",
    textAlign: "center",
    fontSize: "18px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  })
);

export const StyledCard = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "#25292B",
    padding: {xs: "0",sm:"32px 12px 20px 32px"},
    marginBottom: "24px",
    borderRadius: "20px",
  })
);

export const StyledMainCard = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    bgcolor: {sm: "#171718", xs: "#25292B"},
    borderRadius: "15px",
    border: "4px solid #25292B",
    borderTop: "none",
  })
);

export const StyledTopBorder = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    margin: "0 auto 18px",
    backgroundColor: "background.active",
    width: "33%",
    height: "5px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    boxShadow: "#EF5A21 0px 0px 10px",
  })
);
