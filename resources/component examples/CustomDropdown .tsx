import React, { useState } from "react";
import { useForm } from "react-hook-form";



/**
 * this is an example of a custom dropdown menu created. This allows
 * the user to create custom styling for a dropdown that would normally
 * not be possible
 */
const CustomDropdown = () => {
  const { register, handleSubmit } = useForm();
  const [dropbtn, setDropbtn] = useState("Dropdown");

  const dropdownItems = [
    { name: "Link 1", value: "1" },
    { name: "Link 2", value: "2" },
    { name: "Link 3", value: "3" },
  ];

  const onSubmit = data => {
    //do something here with the data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="custom-dropdown">
        <button className="dropbtn">{dropbtn}</button>
        <div className="dropdown-content">
          {dropdownItems.map((item, index) => (
            <a
              href="#"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setDropbtn(item.name);
              }}
            >
              <input
                {...register("dropdownValue")}
                type="radio"
                value={item.value}
                hidden
              />
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CustomDropdown;
