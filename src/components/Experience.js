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

const ExperienceLevel = [
  "1 - Student (High School)",
  "2 - Student (College)",
  "3 - Junior Level",
  "4 - Mid Level",
  "5 - Experienced",
  "6 - Manger/Supervisor",
  "7 - Senior Manger/Supervisor",
  "8 - Executive",
  "9 - Senior Executive",
];

function Experience() {
  const [experience, setExperience] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setExperience(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>
          Experience Level
        </InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          //   multiple
          value={experience}
          onChange={handleChange}
          input={<OutlinedInput label='Experience Level' />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {ExperienceLevel.map((Experience) => (
            <MenuItem key={Experience} value={Experience}>
              {/* <Checkbox checked={experience.indexOf(Experience) > -1} /> */}
              <ListItemText primary={Experience} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Experience;
