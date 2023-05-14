import React ,{useState} from 'react'


//components 
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Conversations from './Conversations'

function Menu() { 
    const[text,setText] = useState('')
  return (
    <Box>
      <Header />
      <Search setText={setText}/>
      <Conversations text={text}/>
    </Box>
  )
}

export default Menu
