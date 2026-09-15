import styled from "styled-components"
import searchIcon from "../asset/icon-search-512.png"

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchIcon src={searchIcon}/>
      <Input/>
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled.div`
  display: flex;
  border: 1px gray solid;
  border-radius: 50px;
  height: 50px;
  justify-self: center;
  margin: 0 15px;
  margin-top: 15px;
`

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`

const Input = styled.input`
  outline: none;
  border: none;
  width: 510px;
  font-size: 20px;
`