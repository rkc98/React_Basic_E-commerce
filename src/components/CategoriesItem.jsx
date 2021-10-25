import React from 'react'
import styled from 'styled-components'

const CategoriesItem = ({item}) => {
    return (
        <Container>

            <Image src={item.img} />
            <InfoContainer>
                <Title>
                    {item.title}
                </Title>
                <Button>
                    Add to Cart
                </Button>
            </InfoContainer>
            
        </Container>
    )
}


const Container=styled.div`
 
 flex: 1;
 margin: 3px;
 height: 70vh;
 position: relative;
`

const Image= styled.img`
width: 100%;
height: 90%;
object-fit: cover;


`
const InfoContainer=styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



`
const Title=styled.h3`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  margin-bottom: 20px;
`

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
font-weight: 600;
cursor: pointer;
font-size: 15px;

`



export default CategoriesItem
