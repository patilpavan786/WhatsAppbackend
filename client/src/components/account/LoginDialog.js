import React from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../constant/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 3.5rem 0 3.5rem 3.5rem;
`;
const Title = styled(Typography)`
  font-size: 2.5rem;
  color: #525252;
  font-weight: 100;
  font-family: inherit;
  margin-bottom: 1.5625rem;
`;
const QRcode = styled("img")({
  height: 264,
  width: 264,
  margin: "3.5rem 0 0 7rem",
});

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 0.9375rem;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: #4a4a4;
  }
`;

const dialogeStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};

function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  async function onLoginSuccess(res) {
    let data = jwt_decode(res.credential);
    console.log(data);
    setAccount(data);
    await addUser(data);
  }
  function onLoginError(res) {
    console.log("login fail", res);
  }

  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogeStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <StyledList>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>
                2. Tap Menu or Settings and select Linked Devices
              </ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRcode src={qrCodeImage} alt="bar-code" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateX(50%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
