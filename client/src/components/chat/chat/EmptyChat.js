import { Box, styled, Typography, Divider } from "@mui/material";

import { emptyChatImage } from "../../../constant/data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 1.875rem 0;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0 12.5rem;
`;

const Image = styled("img")({
  marginTop: 100,
  width: 550,
});

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 1.5625rem 0 8rem 0;
`;

const SubTitle = styled(Typography)`
  font-size: 0.875rem;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 2.5rem 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Now send and receive messages without keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.{" "}
        </SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
