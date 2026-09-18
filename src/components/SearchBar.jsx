import styled from "styled-components"
import searchIcon from "../asset/icon-search-512.png"

export default function SearchBar({ keyword, setKeyword, handleKeyDown}) {

  return (
    <SearchBarWrapper>
      <SearchIcon src={searchIcon} />
      <Input
        placeholder="도로명, 건물명, 지번 검색"
        value={keyword}
        onChange={(e) => { setKeyword(e.target.value) }} 
        onKeyDown={handleKeyDown}
      />
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled.div`
  display: flex;
  border: 1px #DDDDDD solid;
  border-radius: 30px;
  align-items: center;
  margin: 15px;
  height: 45px;
  gap: 10px;
  padding: 12px 15px
`

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 15px;
  width: 90%;
  color: #757575;
`