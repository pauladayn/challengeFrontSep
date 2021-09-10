import React from "react";
import s from "./index.module.scss";

import {Icon, Menu, MenuButton, Link, ReachLink } from "@chakra-ui/react";

const NavItem = ({ barSize, icon, title, onClick }) => {


  return (
    <div
      className={s.container}
      style={{ alignItems: barSize === "small" ? "center" : "flex-start" }}
    >
      <Menu placement="right">
        <Link as={ReachLink} 
          pl={3} pr={3} pt={3}
          w={barSize === "large" && "100%"}
          borderRadius={8}
          _hover={{ textDecoration: "none" }}
          as={ReachLink}
        >
          <MenuButton w="100%">
            <div className={s.itemsContainer}>
              <Icon as={icon} fontSize="lg"  mt={1}  onClick={onClick}>
        
              </Icon>
              <h3 style={{  display: barSize === "small" ? "none" : "flex" }}>
                {title}
              </h3>

            </div>
       
          </MenuButton>
        </Link>
      </Menu>
    </div>
  );
};

export default NavItem;
