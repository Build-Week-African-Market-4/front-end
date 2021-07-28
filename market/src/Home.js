import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import img from './Assets/pic02.jpeg'
import Bestsellers from './Bestsellers'

const Banner = styled.div`
    background-image: url(${img});
    height: 35vh;
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content:center;
    align-items: center;
`
const ItemsWrapper = styled.div`
    text-align: center;
`
const ShopBtn = styled.button`
    width: 30%;
    padding: 20px;
    background-color: rgba(255,255,255,0.9);
    border: solid 1px black;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
`

export default function Home(props){
    const { items, sort } = props
    
    const history = useHistory()
    const routeToItems = () => {
        history.push('items-list')
    }
    
    return(
        <div className="home">
            <Banner> 
                
                <ShopBtn
                    onClick = {routeToItems}
                    className = 'items-button'
                    >
                    Shop all products
                </ShopBtn>  
            </Banner>
            <ItemsWrapper>
                <h3>See whats new.</h3>
               <Bestsellers items={items} />
            </ItemsWrapper>            
        </div>
    )
}