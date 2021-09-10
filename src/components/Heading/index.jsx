import React, { useState } from "react";
import s from "./index.module.scss";
import { Text, Link, Select } from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";

const Heading = ({ text, title, helper }) => {
  const [showItems, setShowItems] = useState(false);

  const handleItems = (showItems) => {
    setShowItems(!showItems);
  };

  return (
    <div className={s.container}>
      <div className={s.box}>
        <Text>{title}</Text>
          <Select size="xs" onClick={(e) => helper(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="progress">In progress</option>
            <option value="finished">Finished</option>
          </Select>

      </div>

   
    </div>
  );
};

export default Heading;
