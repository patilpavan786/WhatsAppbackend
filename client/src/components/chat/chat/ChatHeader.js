import { useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";
import { defaultProfilePicture } from "../../../constant/data";

const Header = styled(Box)`
  height: 2.75rem;
  background: #ededed;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 0.75rem !important;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 0.5rem;
    font-size: 1.375rem;
    color: #000;
  }
`;

const Status = styled(Typography)`
  font-size: 0.75rem !important;
  color: rgb(0, 0, 0, 0.6);
  margin-left: 0.75rem !important;
`;

function ChatHeader({ person }) {
  const url = person?.picture || defaultProfilePicture;

  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={url} alt="display picture" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
}

export default ChatHeader;
