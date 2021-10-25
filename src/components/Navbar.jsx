import { Badge } from '@material-ui/core'
import { Mail, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Container>

            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <Search />

                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-COMMERCE</Logo>
                </Center>
                <Right>
                    <MenuItem>
                    REGISTER
                    </MenuItem>
                    <MenuItem>
                    SIGN IN
                    </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    
                    </MenuItem>
                </Right>
            </Wrapper>
            
        </Container>
    )
}

const Container=styled.div`
height: 60px;
/* background-color: black; */
`
const Wrapper =styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Left =styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center =styled.div`
flex: 1;
text-align: center;
`
const Right =styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const SearchContainer=styled.div`
border: 2px solid lightgray;
border-radius: 15%;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input =styled.input`
border: none;

`
const Logo =styled.h1`
font-weight: bold;
 font-family: cursive;

`
const MenuItem =styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


export default Navbar
