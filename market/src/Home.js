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
            <Banner>     
            </Banner>
            <ItemsWrapper>
                <h3>See whats new.</h3>
                <button
                    onClick={routeToItems}
                    className='items-button'
                    >
                    Items List
                    </button>
            </ItemsWrapper>            
        </div>
    )
}