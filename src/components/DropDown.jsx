import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const DropDown = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "300px", md: "320px" },
          height: "30px",
          marginBottom: "20px",
          bgcolor: "#1E2122",
          borderRadius: "30px",
          border: "2px solid #2C3234",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              height: "30px",
              border: "none",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
            top: "-12px",
          },
          svg: {
            color: "white",
            bgcolor: "#EF5A21",
            border: "1px solid white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            top: "9px",
            right: "0",
          },
        }}
      >
        <InputLabel>ქულების დაგროვების მექანიკა</InputLabel>
        <Select
          value={age}
          label={"ქულები"}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                color: "text.primary",
                bgcolor: "background.default",
                fontSize: { xs: "12px", sm: "13px" },
              },
            },
          }}
        >
          <MenuItem value={10}>Lorem ipsum dolor 1</MenuItem>
          <MenuItem value={20}>Lorem ipsum dolor 2</MenuItem>
          <MenuItem value={30}>Lorem ipsum dolor 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
