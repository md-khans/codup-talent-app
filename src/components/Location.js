import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const LocationData = [
  "Anywhere",
  "Karachi",
  "Lahore",
  "Quetta",
  "Islamabad",
  "Other",
];

function Location() {
  const [location, setLocation] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>Location</InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          //   multiple
          value={location}
          onChange={handleChange}
          input={<OutlinedInput label='Location' />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {LocationData.map((Location) => (
            <MenuItem key={Location} value={Location}>
              <ListItemText primary={Location} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;
