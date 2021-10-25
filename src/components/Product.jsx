import { SearchOutlined, ShoppingCartOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Product = ({item}) => {
    return (
        <Container>

            <Circle />
            <Image src={item.img} />
            <InfoContainer>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                    </Icon>
                    <Icon>
                    <StarBorderOutlined />
                    </Icon>
            </InfoContainer>
            
        </Container>
    )
}
const InfoContainer=styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  cursor: pointer;

`

const Container=styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${InfoContainer}{
      opacity: 1;

  }


`

const Circle=styled.div`
`

const Image=styled.img`
height: 75%;
width: 95%;

`


const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
transition: all 0.5s ease;
&:hover{
    background-color: blueviolet;
    cursor: pointer;
    transform: scale(1.2);
}

`

export default Product
