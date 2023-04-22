import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderRadius: "8px",
          backgroundColor: "background.secondary",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='text.primary'
          indicatorColor='background.active'
          variant='fullWidth'
          aria-label='main tabs'
          sx={{ marginTop: "39px" }}
        >
          <Tab
            label='Cash Games'
            {...a11yProps(0)}
            sx={{ minHeight: "77px" }}
          />
          <Tab
            label='Spring Series'
            {...a11yProps(1)}
          />
          <Tab
            label='Final Stage'
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
      >
        Item One
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        Item Two
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
      >
        Item Three
      </TabPanel>
    </Box>
  );
}
