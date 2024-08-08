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

const Technology = [
  "PHP",
  "Key Account Manager",
  "MERN",
  "Next.js",
  "Javascript",
  "Node.js",
  "React.js",
  "Project Manager",
  "React Native",
  "Python",
  "WordPress",
];

function TechStack({ onChange }) {
  const [technology, setTechnology] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTechnology(typeof value === "string" ? value.split(",") : value);
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>
          Technology Stack
        </InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={technology}
          onChange={handleChange}
          input={<OutlinedInput label='Technology Stack' />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {Technology.map((tech) => (
            <MenuItem key={tech} value={tech}>
              <Checkbox checked={technology.indexOf(tech) > -1} />
              <ListItemText primary={tech} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default TechStack;
