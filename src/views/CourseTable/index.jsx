import React, { useState, useEffect } from "react";
import users from "../../mock_api/users.json"

/* para la aplicación del caso no se utiliza un pedido asíncrono como fetch o axios debido a que la data se encuentra almacenada de forma local */
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Checkbox,
  Divider,
  Badge,
  Button,
  Select,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";
import { FiChevronsUp, FiChevronsDown } from "react-icons/fi";
import s from "./index.module.scss";

const CourseTable = () => {
  const [display, changeDisplay] = useState("show");
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const [data, setData] = useState(null); //objeto vacío

  const allChecked = checkedItems.every(Boolean);


  return (
    <div className={s.container}>
      <div className={s.actions}>
        <Select placeholder="Company" size="lg" variant="filled">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Button className={s.button}> Add contact </Button>
        <Button className={s.button} leftIcon={<EmailIcon />} variant="outline">
          Email
        </Button>
      </div>
  
      <div className={s.tableContainer}>
        <Divider />
       
        <Flex flexDir="column" borderRadius={3}>
         
        
          <Table variant="unstyled" mt={6} size="sm">
     <Thead>
              <Tr style={{ color: "grey", textAlign: "center"  }}>
                <Th>
                  {" "}
                  <Checkbox />{" "}
                </Th>

                <Th>Employee</Th> 
                <Th>Email</Th> 
                <Th>Job Area</Th> 
                <Th>Position</Th>         
                <Th>Status</Th>
                <Th>Recent activity</Th>
              </Tr>
            </Thead> 
            <Tbody>
              {display === "show" && (
                <>


            
                  {users?.map(
                    ( {
                      user_avatar,
                      full_name,
                      job_aerea,
                      email,
                      position, 
                      course_status,
                     recent_activity
                    }, index ) => {
                    
                    
                      return (
                      <Tr key={index}>
                        <Td>
                          {" "}
                          <div className={s.tableRow}>
                            <Checkbox
                              spacing="1rem"
                              isChecked={allChecked}
                              onChange={(e) =>
                                setCheckedItems([
                                  e.target.checked,
                                  e.target.checked,
                                ])
                              }
                            />
                          </div>
                        </Td>

                        <Td className={s.row}>
                          <div className={s.avatar}>
                            <Avatar size="md" src={user_avatar} />
                          </div>

                          <div className={s.text}>
                            <p>{full_name}</p>
                          </div>
                        </Td>
                        <Td>{email}</Td>
                        <Td>{job_aerea}</Td>
                        <Td>{position}</Td>
                        <Td>{course_status}</Td>
                        <Td>{recent_activity}</Td>
                      </Tr>
                    );
                  })}
                </>
              )}
            </Tbody>
          </Table>
          <div className={s.displayButton}>
            <Divider />
            {display === "show" ? (
              <FiChevronsUp
                onClick={() => {
                  changeDisplay("none");
                }}
              />
            ) : (
              <FiChevronsDown
                onClick={() => {
                  changeDisplay("show");
                }}
              />
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CourseTable;
