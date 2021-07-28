import React, {useState} from 'react'
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components'
import {Cart4} from '@styled-icons/bootstrap/Cart4'
import axiosWithAuth from './utils/axioswithAuth';
import Search from './Search'


const NavWrapper = styled.section `
    padding: 0% 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;
    border-bottom: solid 1px gray;
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

function Header(props) {
    const { items } = props;
    // const logout = () => {
    //     axiosWithAuth()
    //     .post("/auth/logout")
    //     .then(res => {
    //       localStorage.removeItem('token');
    //       window.location.href = "/login";
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    //   };

    return (
        <div>
            <NavWrapper>
            <Logo to = '/'>African Marketplace.</Logo>

            {/* <SearchB> */}
                {/* https://www.emgoto.com/react-search-bar/
                    if there's time left finish the search functionality
                */}
                
                {/* <input  type='text'
                        id='header-search'
                        placeholder='Search for anything'
                        width='350px'
                />
                <button>Search</button>

            </SearchB> */}

            {/* <Search items = {items} 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul> */}

            <Search placeholder="Search for anything" data={items} />

            <NavLinks>
                <NavLink to = '/login'>Sign In</NavLink>
                <NavLink to = '/items-list'>Products</NavLink>
                <NavLink to = '/listItem'>Add Item</NavLink>
                {/* <NavLink onClick={logout}>Logout</NavLink> */}
                <Cart />
            </NavLinks>
            </NavWrapper>
        </div>
    )
}

export default Header
