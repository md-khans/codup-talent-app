import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

const EmploymentType = [
  "1 - Full Time",
  "2 - Part Time",
  "3 - Part Time to Full Time",
  "4 - Temporary",
  "5 - Temporary to Full Time",
  "6 - Contracted",
  "7 - Contracted to Full Time",
  "8 - Internship",
  "9 - Internship to Full Time",
  "10- Volunteer",
  "11- Seasonal",
];

function Employment() {
  const [employment, setEmployment] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmployment(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>
          Employment Type
        </InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          //   multiple
          value={employment}
          onChange={handleChange}
          input={<OutlinedInput label='Employment Type' />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {EmploymentType.map((Employment) => (
            <MenuItem key={Employment} value={Employment}>
              {/* <Checkbox checked={experience.indexOf(Employment) > -1} /> */}
              <ListItemText primary={Employment} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Employment;
