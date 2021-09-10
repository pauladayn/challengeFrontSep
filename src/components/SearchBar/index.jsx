import React from "react";
import s from "./index.module.scss";

import {
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

import { FiBell, FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className={s.navbar}>
        <div className={s.search}>
        <InputGroup  
        mb={1}
        border="none"
        borderColor="#fff"
        borderRadius="1rem"
        
      >
        {" "}
        <InputLeftElement
          pointerEvents="none"
          size="xs"
          children={<FiSearch color="gray" />}
        />
        <Input
       
         
          type="text"
          placeholder="Search"
          borderRadius="0.5rem"
        />
          </InputGroup>
        </div>
     
        <Avatar className={s.icon} icon={<FiBell />}>
          <AvatarBadge bg="tomato" boxSize="1em" />
        </Avatar>
    
    </div>
  );
};

export default SearchBar;
