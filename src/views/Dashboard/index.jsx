import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import s from "./index.module.scss";
import users from "../../mock_api/users.json";
import filterStatus from "../../helpers/functions";

import {
  Progress,
  CircularProgress,
  CircularProgressLabel,
 
} from "@chakra-ui/react";

const Dashboard = () => {
  const [display, setDisplay] = useState([]);
  const [progress, showProgress] = useState([]);
  const [pending, showPending] = useState([]);
  const [finished, showFinished] = useState([]);
  const [selected, setSelected] = useState("pending");

  useEffect(() => {
    showProgress(filterStatus(users, "progress"));
    showPending(filterStatus(users, "pending"));
    showFinished(filterStatus(users, "finished"));

    if (selected === "pending") {
      setDisplay(pending);
    }
    if (selected === "progress") {
      setDisplay(progress);
    }
    if (selected === "finished") {
      setDisplay(finished);
    }
  }, [selected, progress, pending, finished]);

  const helper = (value) => {
    setSelected(value);
  };

  const getChartColor = () => {
    if (selected === "pending") {
      return "red";
    }
    if (selected === "progress") {
      return "orange";
    }
    if (selected === "finished") {
      return "green";
    }
  };

  return (
    <div className={s.container}>
      <div className={s.pannel}>
        <div className={s.heading}>
          <Progress value={80} size="sm" colorScheme="green" />
          <Heading
            title="Sort by status"
            text="Sort by status"
            helper={helper}
          ></Heading>
        </div>

        <div className={s.cardContainer}>
          {display?.map(
            (
              {
                full_name,
                email,
                job_aerea,
                position,
                course_name,
                course_status,
              },
              index
            ) => {
              return (
                <Card
                  key={index}
                  course_status={course_status}
                  course_name={course_name}
                  email={email}
                  job={job_aerea}
                  position={position}
                  name={full_name}
                />
              );
            }
          )}
        </div>

        <p>Show more</p>
      </div>

      <div className={s.charts}>
        <div className={s.progress}>
          <CircularProgress
            label
            value={display.length * 5}
            size="200px"
            align="center"
            color={getChartColor()}
          >
            <CircularProgressLabel>{display.length}</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
