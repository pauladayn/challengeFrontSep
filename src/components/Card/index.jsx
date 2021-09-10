import React from "react";
import s from "./index.module.scss";
import { Button, Badge, Avatar } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

const Card = ({
  user_avatar,
  name,
  job,
  email,
  position,
  course_status,
  recent_activity,
  course_name
}) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar}>
          <Avatar size="sm" src={user_avatar}/></div>
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.area}>{position}</div>
        </div>
      </div>
      <div className={s.content}>Course: {course_name}</div>
      <div className={`${course_status}`}>•{course_status}</div>
      <Button className={s.submitButton}isFullWidth leftIcon={<EmailIcon />} size="xs" colorScheme="blue">send reminder</Button>
    {/*   <div className={s.title}>
        In progress
        <p className={s.innerTitle}></p>
        <p className={s.reminder}>{position}</p>
      </div>
      <div className={s.actions}>
      
      </div> */}
    </div>
  );
};

export default Card;

/* una func que filtre por tiempo menor al expiry date */

/* hay x cantidad de mails no respondidos


sumar un boton que vaya a tabla de cursos y otro que vaya a enviar mail */
