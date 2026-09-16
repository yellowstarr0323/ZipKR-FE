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
  width: 600px;
  height: 500px;
  border: 1px gray solid;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Line = styled.hr`
  border: 1px gray solid;
`
