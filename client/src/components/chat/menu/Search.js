
import { Box, InputBase, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Component = styled(Box)`
    background: #fff;
    height: 2.8125rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 0.625rem;
    background-color: #f0f2f5;
    margin: 0 0.8125rem;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 0.5rem;
    height: 100%;
    position: absolute;
`;
      
const InputField = styled(InputBase) `
    width: 100%;
    padding: 1rem;
    padding-left: 4.0625rem;
    font-size: 0.875rem;
    height: 0.9375rem;
    width: 100%;
`;

const Search = ({ setText }) => {

    return (
        <Component>  
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <InputField
                    placeholder="Search or start new chat"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search;