import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data/productsData'
import Product from './Product'

const Products = () => {
    return (
        <Container>

            {
                popularProducts.map(item=>(
                    <Product item={item} key={item.id} />
                ))
            }
            
        </Container>
    )
}

const Container=styled.div`
 display: flex;
 padding: 20px;
 flex-wrap: wrap;
`
export default Products
