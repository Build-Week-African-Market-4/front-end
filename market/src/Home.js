import React from 'react'
import { useHistory } from 'react-router-dom'
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



export default function Home(){
    
    const history = useHistory()
    const routeToItems = () => {
        history.push('items-list')
    }
    
    return(
        <div className="home">
            <div className="home-body">
            <Banner>
                
            </Banner>
            </div>
            <ItemsWrapper>
                <h3>See whats new.</h3>
                <div>

                    <img 
                    className="body-image"
                    src="https://media.istockphoto.com/photos/fruit-and-vegetable-market-picture-id160342236?k=6&m=160342236&s=612x612&w=0&h=JRs8uuwUJRTfVJKJWZd1OKd6-6zqHeUmgL7PzAqCeHs="
                    alt=''
                    />
                </div>
                <button
                    onClick={routeToItems}
                    className='items-button'
                    >
                    Items List
                    </button>
            </div>
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