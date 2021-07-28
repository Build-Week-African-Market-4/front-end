import React from 'react'
import styled from 'styled-components'

const ItemsWrapper = styled.div`
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
`

const ItemsContent = styled.div`
    text-align: center;
    width: 80%;
`

// Filter Area Styles
const Sort = styled.div`
    font-size: 14px;
    padding: 10px;
`

const SortIn = styled.select`
    font-size: 12px;
    padding: 10px;
    border: solid 1px black;
    border-radius: 30px;
    width: 175px;
    height: 50px;
`
const ItemsFilter = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
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
    width: 200px;
    height: 275px; 
    margin: 5px;
`
// ITEM IMAGE
const ProductImg = styled.img`
   width: 200px;
   height: 200px;
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

export default function ItemsList(props){
    const { items, sortType, setSortType, setItems } = props

    const onSort = event => {
        const newType = event.target.value;
        setSortType(newType);
        let sorted;
        if (newType === 'price') {
            sorted = items.sort((a, b) => a.price - b.price);
            console.log(newType)
            setItems(sorted)
        } else if (newType === 'title') {
            sorted = items.sort((a, b) => a.title.localeCompare(b.title));
            console.log(newType)
            setItems(sorted)
        }
    }

    return(
        <ItemsWrapper>
            <ItemsContent>
                <ItemsFilter>
                    <div>{items.length} Results&nbsp;</div>
                    <Sort>
                        <SortIn
                            id = 'sort-dropdown'
                            onChange = {onSort}
                            value = {sortType}
                            name = 'sort'
                        >
                            <option value = "">Sort by Relevancy</option>
                            <option value = "title">Title</option>
                            <option value = "price">Price</option>
                        </SortIn>
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