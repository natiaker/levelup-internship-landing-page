import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const DropDown = () => {
  const [age, setAge] = useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl
        sx={{
          width: "320px",
          height: "30px",
          bgcolor: "white",
          borderRadius: "30px",

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              height: "30px",
              border: "none",
            },
          },
        }}
      >
        <InputLabel>ქულების დაგროვების მექანიკა</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
