import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import countryList from "react-select-country-list";


function Country() {
    const [value, setValue] = useState([]);
    const options = countryList().getData();
  
    const handleChange = (selectedOptions) => {
      setValue(selectedOptions);
    };

  return (
    <>
        <div style={{ width: 300, margin: "1rem" }}>
      <Select
        components={makeAnimated()}
        isMulti
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Select Country"
      />
    </div>
    </>
  )
}

export default Country;
