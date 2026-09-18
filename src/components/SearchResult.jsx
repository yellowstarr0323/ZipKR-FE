import styled from "styled-components"
import SearchBox from "./SearchBox"

export default function SearchResult({ keyword, results, selectedIndex }) {

  return (
    results.length === 0 ?
      <ResultEmptyWrapper>
        <ResultEmptyText>
          "{keyword}"에 대한 검색 결과가 없습니다 <br />
          도로명이나 건물명을 다시 확인해주세요
        </ResultEmptyText>
      </ResultEmptyWrapper>
      :
      results.map((data, index) => (
        <SearchBox
          key={index}
          postalCode={data.postalCode}
          roadName={data.roadNameAddress}
          jibunName={data.jibunAddress}
          selected={index === selectedIndex}
        />
      ))
  )
}

const ResultEmptyWrapper = styled.div`
  display: flex;
  padding: 36px 24px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`

const ResultEmptyText = styled.p`
  color: #6A6A6A;
  text-align: center;
  font-family: Inter;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.93px;
`