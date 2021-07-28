import React from 'react'
import styled from 'styled-components'

const ItemsWrapper = styled.div`
    text-align: center;
    /* border: solid 1px gold; */
    display: flex;
    align-content: center;
    justify-content: center;
`

const ItemsContent = styled.div`
    text-align: center;
    /* border: solid 1px blue; */
    width: 80%;
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

const Sort = styled.div`
    font-size: 14px;
`
const ItemsFilter = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
`

const ItemDiv= styled.div`
    text-align: center;
    /* border: solid 1px black; */
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content:center;
`

const Item = styled.div`
    text-align: center;
    /* border: solid 1px red; */
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 275px; 
    margin: 5px;
`

const ProductImg = styled.img`
   width: 200px;
   height: 200px;
   /* border: solid 1px green; */
   object-fit: scale-down;
`

export default function ItemsList(props){
    const { items, sort } = props

    const onSort = event => {
        event.preventDefault();
        sort();
    }

    return(
        <ItemsWrapper>
            <ItemsContent>
                <ItemsFilter>
                    <div>20 Results&nbsp;</div>
                    <Sort>
                        <select
                            // id = 'sort-dropdown'
                            // onChange = {onSort}
                            // value = {values.sort}
                            // name = 'sort'
                        >
                            <option value = "">- Sort By -</option>
                            <option value = "first_name">Title</option>
                            <option value = "price">Price</option>
                        </select>
                    </Sort>
                </ItemsFilter>
            <ItemDiv>
            {items.map(item => (
                <Item
                        // className='item-card'
                        // key={item.id}
                    >
                <ProductImg 
                    className='items-list-image'
                    src={item.image}
                    alt={item.title} />
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
                </Item>
            
            ))}</ItemDiv>
                
        </ItemsContent>
        </ItemsWrapper>

    )
}