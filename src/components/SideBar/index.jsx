import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem";
import s from "./index.module.scss";
import { Divider, Avatar, Flex, Text } from "@chakra-ui/react";

import {
  FiGrid,
  FiMessageSquare,
  FiUser,
  FiMail,
  FiEdit,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiServer,
} from "react-icons/fi";

const SideBar = () => {
  const [barSize, setBarSize] = useState("small");

  const handleSizeBar = () => {
    barSize === "small" ? setBarSize("large") : setBarSize("small");
  };

  return (
    <div className={s.container}>
      <div className={s.navContainer}>
        <div className={s.heading}>
          {" "}
          <Avatar
            size="sm"
            className={s.avatar}
            display={barSize === "small" ? "center" : "flex-start"}
          />
          <Flex
            flexDir="column"
            display={barSize === "small" ? "none" : "flex"}
          >
            <Text fontSize="sm" ml=".5rem">
              Sarah Ferghuson
            </Text>
            <Text fontSize="xs" ml=".5rem">
              email
            </Text>
          </Flex>
        </div>

        <Divider display={barSize === "small" ? "none" : "flex"} />
        <Link to="/">
          <NavItem barSize={barSize} icon={FiGrid} title="Dashboard" />
        </Link>
        <Link to="/courses">
          <NavItem barSize={barSize} icon={FiServer} title="Table" />
        </Link>

        <NavItem barSize={barSize} icon={FiUser} title="Contacts" />
        <NavItem barSize={barSize} icon={FiMail} title="Email" />
        <NavItem barSize={barSize} icon={FiMessageSquare} title="Chat" />
        <NavItem barSize={barSize} icon={FiEdit} title="Tasks" />
        <NavItem barSize={barSize} icon={FiMoreHorizontal} title="Settings" />

        <Divider display={barSize === "small" ? "none" : "flex"} />

        <div className={s.toggleContainer}>
          {barSize === "small" ? (
            <FiChevronRight
              onClick={() => {
                handleSizeBar();
              }}
            />
          ) : (
            <FiChevronLeft
              onClick={() => {
                handleSizeBar();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
