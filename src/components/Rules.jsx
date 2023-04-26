import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

const StyledText = styled(Typography)({
  fontSize: "15px",
  padding: { xs: "7px 0", sm: "7px 25px" },
  color: "#BBBBBB",
});

const Rules = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          bgcolor: "#25292B",
          marginBottom: "10px",
          borderRadius: "7px",
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={
            <ExpandMoreIcon sx={{ color: "white", opacity: "0.6" }} />
          }
        >
          <StyledText>როდის იწყება და რა ფორმატით გაიმართება აქცია</StyledText>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            natus omnis voluptatibus repudiandae.
          </StyledText>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          bgcolor: "#25292B",
          marginBottom: "10px",
          borderRadius: "7px",
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={
            <ExpandMoreIcon sx={{ color: "white", opacity: "0.6" }} />
          }
        >
          <StyledText>როგორ მივიღო აქციაში მონაწილეობა?</StyledText>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            eligendi doloribus odio eos, cum recusandae voluptate quidem ipsum
            reiciendis, repudiandae rerum. Perspiciatis, vel aperiam. Ut
            corrupti officiis laboriosam doloribus ad!
          </StyledText>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          bgcolor: "#25292B",
          marginBottom: "10px",
          borderRadius: "7px",
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={
            <ExpandMoreIcon sx={{ color: "white", opacity: "0.6" }} />
          }
        >
          <StyledText>სხვადასვა</StyledText>
        </AccordionSummary>
        <AccordionDetails>
          <StyledText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </StyledText>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Rules;
