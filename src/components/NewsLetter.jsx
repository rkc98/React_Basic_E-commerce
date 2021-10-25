
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const NewsLetter = () => {
    return (
        <Container>
            <Title>
                Newsletter 
            </Title>
            <Description>
                Get timely updates for your favourite products
            </Description>

            <InputContainer>
            <Input placeholder="Your email address" />
            <Button>
                <Send />

            </Button>
            
            </InputContainer>
            
        </Container>
    )
}

const Container=styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title=styled.h1`
 font-size: 70px;
 margin-bottom: 20px;


`
const Description =styled.p`
font-size: 24px;
font-weight: 300px;
margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
background-color: #fff;
`
const Input=styled.input`
border: none;
flex: 8;
font-size: 22px;
padding: 20px;
`
const Button =styled.button`
 flex: 1;
 background-color: teal;
 color: white;
`
export default NewsLetter
