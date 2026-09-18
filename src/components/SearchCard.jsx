import styled from "styled-components";
import SearchBar from "./SearchBar";
import RecentSearchList from "./RecentSearchList";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { searchPostalCode } from "../api/SearchPostalCode";

export default function SearchCard() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setSearchResult([]);
      return;
    }

    const getSearchResult = async () => {
      
      if(searchKeyword==="" || searchKeyword===null){
        setSearchResult(null)
        return 
      }

      const response = await searchPostalCode({
        keyword: searchKeyword,
        page: 0
      });

      setSearchResult(response.data);
    };

    getSearchResult();
  }, [searchKeyword]);

  return (
    <SearchCardWrapper>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={setSearchKeyword}
      />

      <Line />

      {searchKeyword === "" ? (
        <RecentSearchList />
      ) : (
        <SearchResult keyword={searchKeyword} results={searchResult} />
      )}
    </SearchCardWrapper>
  );
}

const SearchCardWrapper = styled.div`
  width: 480px;
  border: 1px #dddddd solid;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02),
    0 2px 6px 0 rgba(0, 0, 0, 0.04),
    0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px #dddddd solid;
`;