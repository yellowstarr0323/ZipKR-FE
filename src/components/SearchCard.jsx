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
  border: 1px #DDDDDD solid;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 rgba(0, 0, 0, 0.10);
`

const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px #DDDDDD solid;
`