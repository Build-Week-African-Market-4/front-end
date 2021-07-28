import { useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import {Close} from '@styled-icons/evaicons-solid/Close'
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'
import styled from 'styled-components'

const DataResult = styled.div`
    width: 300px;
    height:200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-y: auto;
    z-index:99;
    position: absolute;
    &::-webkit-scrollbar {display:none}
`
const ALink = styled.a`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    /* ${props => props.P && "margin-left: 10px;"} */
    &:hover {
    background-color:lightgray;
  }
`
const CloseSearch = styled(Close)`
   width: 20px;
   padding: 0px 20px;
   cursor: pointer;
`

const SearchIcon = styled(SearchAlt)`
   width: 20px;
   padding: 0px 20px;
   cursor: pointer;
`

const SearchIcons = styled.div`
  height: 60px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
`
const SearchInput = styled.input`
  background-color: white;
  border: 0;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 30px;
  width: 300px;
  &:focus {
    outline: none;
  }
`
const SearchInputs = styled.div`
    display: flex;
`


function Search({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }

    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    return (
    <div>
        <SearchInputs>
          <SearchInput
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />

{/* SEARCH AND CLOSE SEARCH ICONS */}
          <SearchIcons>
                {filteredData.length === 0 ? (
                <SearchIcon />
                ) : (
                <CloseSearch id="clearBtn" onClick={clearInput} />
                )}
          </SearchIcons>
{/* FILTERED DATA MAP */}
        </SearchInputs>
        {filteredData.length != 0 && (
          <DataResult>
            {filteredData.slice(0, 10).map((value, key) => {
              return (
                <ALink href={value.link} target="_blank">
                  <p>{value.title}</p>
                </ALink>
              );
            })}
          </DataResult>
        )}
    </div>
    );
  }


  export default Search;

