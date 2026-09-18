import styled from "styled-components";
import SearchBar from "./SearchBar";
import RecentSearchList from "./RecentSearchList";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { searchPostalCode } from "../api/SearchPostalCode";
import { copyToClipboard } from "../util/CopyPostalCode";

export default function SearchCard() {

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // 방향키를 주소를 선택하는 인덱스
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 검색어가 바뀔 때마다 우편번호 검색 api 호출
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setSearchResult([]);
      return;
    }

    const getSearchResult = async () => {

      if (searchKeyword === "" || searchKeyword === null) {
        setSearchResult(null)
        return
      }

      const response = await searchPostalCode({
        keyword: searchKeyword,
        page: 0
      });

      setSelectedIndex(0)
      setSearchResult(response.data);
    };

    getSearchResult();
  }, [searchKeyword]);

  // 방향키(상하)를 통해 selectedIndex의 값을 수정한 뒤 엔터를 누르면 우편번호 복사
  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => {
        if (prev < searchResult.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }

    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    }

    if (e.key === "Enter") {
      if (selectedIndex === 0) {
        return;
      }

      const selectedResult = searchResult[selectedIndex];

      copyToClipboard(selectedResult.postalCode);

      const recentSearchList =
        JSON.parse(localStorage.getItem("recentSearchList")) || [];

      const updatedList = [
        selectedResult,
        ...recentSearchList.filter(
          (recentSearch) => recentSearch.postalCode !== selectedResult.postalCode
        )
      ];

      localStorage.setItem(
        "recentSearchList",
        JSON.stringify(updatedList)
      );
    }
  }

  return (
    <SearchCardWrapper>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={setSearchKeyword}
        handleKeyDown={handleKeyDown}
      />

      <Line />

      {searchKeyword === "" ? (
        <RecentSearchList />
      ) : (
        <SearchResult
          keyword={searchKeyword}
          results={searchResult}
          selectedIndex={selectedIndex}
        />
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
  border: none;
  border-top: 1px #dddddd solid;
`;