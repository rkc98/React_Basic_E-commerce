import React from 'react'
import styled from 'styled-components'
import { categories } from '../data/categoriesData'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
    return (
        <Container>
            

            {
                categories.map(item=>(
                    <CategoriesItem item={item} key={item.id} />
                ))
            }
        </Container>
    )
}

const Container =styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

`

export default Categories
