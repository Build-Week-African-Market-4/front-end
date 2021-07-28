import React from 'react'
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components'
import {Cart4} from '@styled-icons/bootstrap/Cart4'


const NavWrapper = styled.section `
    padding: 0% 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;
    border-bottom: solid 1px gray;
`

const Search = styled.section`
`

const Logo = styled(Link)`
    text-transform:lowercase;
    letter-spacing: 1.5px;
    font-size: 24px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 1%;
`

const NavLinks = styled.div`
    color: black; 
    align-items: center;
    justify-content: center;
    display:flex;
`
const NavLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: black;
    align-items: center;
    justify-content: center;
    font-size: 12px;

`
const Cart = styled(Cart4)`
   width: 20px;
   padding: 0px 20px;
`

function Header() {
    return (
        <div>
            <NavWrapper>
            <Logo to = '/'>African Marketplace.</Logo>
            <Search>
                {/* https://www.emgoto.com/react-search-bar/
                    if there's time left finish the search functionality
                */}
                
                <input  type='text'
                        id='header-search'
                        placeholder='Search for anything'
                        width='350px'
                />
                <button>Search</button>
            </Search>
            <NavLinks>
                <NavLink to = '/login'>Sign In</NavLink>
                <NavLink to = '/listItem'>Seller Dashboard</NavLink>
                <NavLink to = '/listItem'>Add Item</NavLink>
                <Cart />
            </NavLinks>
            </NavWrapper>
        </div>
    )
}

export default Header
