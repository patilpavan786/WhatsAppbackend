import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { styled, Box, Divider } from "@mui/material";

import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 4.375rem;
  background-color: #e9edef;
  opacity: .6;
`;

const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);
  const { account ,socket , setActiveUsers} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) )
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])

  return (
    <Component>
      {users.map((user, index) => (
        user.sub !== account.sub && (
          <>
            <Conversation user={user} />
            {users.length !== (index + 1) && <StyledDivider />}
          </>
        )
      ))}
    </Component>
  );
};

export default Conversations;
