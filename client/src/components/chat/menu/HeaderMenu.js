import React, { useState, useContext } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { googleLogout } from '@react-oauth/google';
import { AccountContext } from '../../../context/AccountProvider';

const MenuOption = styled(MenuItem)`
  font-size: 1rem;
  padding: 0.9375rem 3.75rem 0.3125rem 1.5rem;
  color: #4A4A4A;
`;

const Logout = styled(googleLogout)`
  border: none;
  box-shadow: none;
`;

function HeaderMenu({ setOpenDrawer }) {
  const{setAccount}= useContext(AccountContext)
  const [open, setOpen] = useState(false);
 

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    setAccount('')
  };

 

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
        <MenuOption>My Account</MenuOption>
        <MenuOption onClick={handleLogout}>Logout</MenuOption>
      </Menu>
    </>
  );
}

export default HeaderMenu;
