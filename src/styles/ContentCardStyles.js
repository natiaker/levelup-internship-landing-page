import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledCard = styled(Box)({
  backgroundColor: "#25292B",
  padding: "32px 12px 20px 32px",
  marginBottom: "24px",
  borderRadius: "20px",
});

export const StyledMainCard = styled(Box)({
  bgcolor: "background.default",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
  border: "4px solid #25292B",
  borderTop: "none",
});

export const StyledTopBorder = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    margin: "0 auto 18px",
    backgroundColor: "background.active",
    width: "251px",
    height: "5px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    boxShadow: "#EF5A21 0px 0px 10px",
  })
);
