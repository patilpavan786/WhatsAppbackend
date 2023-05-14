
import React,{useContext,useState} from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box , styled} from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';


const Component = styled(Box)`
    height: 2.75rem;
    background: #ededed;
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 0.125rem;
        padding: 0.5rem;
        color: #000;
    };
    & :first-child {
        font-size: 1.375rem;
        margin-right: 0.5rem;
        margin-top: 0.1875rem;
    }
`;
const Image = styled('img') ({
  height: 40,
  width: 40,
  borderRadius: '50%'
})

function Header() {
    
 const [openDrawer, setOpenDrawer] = useState(false);
      
 const {account} = useContext(AccountContext);
  
 const toggleDrawer = () => {
  setOpenDrawer(true);
}

 
 return (
    <>
    <Component>
    <Image src={account.picture} onClick={() => toggleDrawer()} />
        <Wrapper>
                    <MessageIcon />
                    
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
    </>
  )
}

export default Header
