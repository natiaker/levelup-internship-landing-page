import styled from "@emotion/styled";
import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import CashGames from "./tabs/CashGames";
import SpringSeries from "./tabs/SpringSeries";
import FinalStage from "./tabs/FinalStage";

function TabPanel({ children, value, index }) {
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

const StyledTab = styled(Tab)(({ theme }) =>
  theme.unstable_sx({
    textTransform: "capitalize",
    height: "77px",
    borderRadius: "8px",
    color: "text.primary",
    fontSize: { xs: "13px", md: "16px" },
  })
);

export default function TabComponent() {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleTabs}
        variant="fullWidth"
        sx={{
          bgcolor: "background.secondary",
          marginTop: "39px",
          borderRadius: "8px",
          "& button.Mui-selected": {
            bgcolor: "background.active",
            color: "text.primary",
          },
          "& span": {
            display: "none",
          },
        }}
      >
        <StyledTab label="Cash Games" />
        <StyledTab label="Spring Series" />
        <StyledTab label="Final Stage" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CashGames />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SpringSeries />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FinalStage />
      </TabPanel>
    </Box>
  );
}
