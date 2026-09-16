import styled from "styled-components"
import SearchBar from "./SearchBar"
import RecentSearchList from "./RecentSearchList"

export default function SearchCard() {
  return (
    <SearchCardWrapper>
      <SearchBar/>
        <Line/>
      <RecentSearchList/>
    </SearchCardWrapper>
  )
}

const SearchCardWrapper = styled.div`
  width: 480px;
  border: 1px gray solid;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px solid gray;
`