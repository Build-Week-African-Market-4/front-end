import React from 'react'
import styled from 'styled-components'
import img from './Assets/pic02.jpeg'

const Banner = styled.div`
    background-image: url(${img});
    height: 35vh;
    background-size: cover;
    background-position: center
`


export default function Home(props){
    const { items } = props
    return(
        <div className="home">
            <div className="home-body">
            <Banner>
                
            </Banner>
            </div>

            <div className="items-list">
                <h2>Items</h2>
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
        </div>
    )
}