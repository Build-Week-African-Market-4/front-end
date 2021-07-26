import React from 'react'
import styled from 'styled-components'
import img from './Assets/pic02.jpeg'

const Banner = styled.div`
    background-image: url(${img});
    height: 35vh;
    background-size: cover;
    background-position: center
`
const ItemsWrapper = styled.div`
    text-align: center;
`


export default function Home(props){
    const { items } = props
    return(
        <div className="home">
            <div className="home-body">
            <Banner>
                
            </Banner>
            </div>
            <ItemsWrapper>
                <h3>See whats new.</h3>
                <div>
                    New Items Go Here
                </div>
            </ItemsWrapper>            
                {/* {items.map(item => (
                    <div
                    className="item-card"
                    key={item.id}
                    >
                    <img 
                    className="items-list-image"
                    src={item.imageUrl}
                    alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    </div> */}
        </div>
    )
}