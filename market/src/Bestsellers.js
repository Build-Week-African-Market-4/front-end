import React from 'react'
import styled from 'styled-components'

// -------------------
// ITEM STYLES

const ItemDiv= styled.div`
    text-align: center;
    /* border: solid 1px black; */
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content:center;
`
// INDIVDUAL ITEM
const Item = styled.div`
    text-align: center;
    /* border: solid 1px red; */
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 325px; 
    margin: 5px;
`
// ITEM IMAGE
const ProductImg = styled.img`
   width: 250px;
   height: 250px;
   object-fit: scale-down;
`
const Price = styled.div`
    font-size: 14px;
    padding: 3px 0px;
    font-weight: bold;
    `

const Title = styled.div`
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px 0px 0px 0px;
`

function Bestsellers(props) {
    const { items } = props
    const bestsellers = items.slice(0,14)
    return (
        <div>
            <ItemDiv>

            {bestsellers.map(item => (
                <Item
                        className='item-card'
                        key={item.id}
                    >
                <ProductImg 
                    className='items-list-image'
                    src={item.image}
                    alt={item.title} />
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
                </Item>
            
            ))}
            </ItemDiv>
        </div>
    )
}

export default Bestsellers
