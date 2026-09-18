import styled from "styled-components";
import RecentSearchBox from "./RecentSearchBox";

export default function RecentSearchList() {

const recentSearchList = JSON.parse(localStorage.getItem("recentSearchList")) || [];

  return (
    <RecentSearchListWrapper>
      <RecentSearchText>최근 검색</RecentSearchText>

      {recentSearchList.length > 0
        ? recentSearchList.map((recentSearch) => (
          <RecentSearchBox
            key={recentSearch.postalCode}
            address={recentSearch.roadNameAddress}
            postalCode={recentSearch.postalCode}
          />
        ))
        : (
          <IntroduceTextWrapper>
            <IntroduceText>
              도로명, 건물명, 지번 중 아무거나 입력하면 됩니다.
            </IntroduceText>
          </IntroduceTextWrapper>
        )
      }

    </RecentSearchListWrapper>

  )
}

const RecentSearchListWrapper = styled.div`
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 16px;
  padding-right: 16px;
`

const RecentSearchText = styled.p`
  font-size: 11px;
  padding-top:5px;
  padding-bottom: 5px;
`

const IntroduceText = styled.p`
  color: #6A6A6A;
  font-family: Inter;
  font-size: 13px;
`

const IntroduceTextWrapper = styled.div`
  display: flex;
  padding: 22px 4px 13px 4px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`