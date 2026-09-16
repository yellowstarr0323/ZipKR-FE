import styled from "styled-components"
import searchIcon from "../asset/icon-search-512.png"

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchIcon src={searchIcon}/>
      <Input placeholder="도로명, 건물명, 지번 검색"/>
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled.div`
  display: flex;
  border: 1px gray solid;
  border-radius: 30px;
  align-items: center;
  margin: 15px;
  height: 45px;
  gap: 10px;
  padding-left: 15px;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 15px;
  width: 90%;
`