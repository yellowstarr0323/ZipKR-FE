import styled from "styled-components"
import clockIcon from "../asset/icon-clock-512.png"
import { copyToClipboard } from "../util/CopyPostalCode";

export default function RecentSearchBox({address, postalCode}) {

  return (
    <RecentSearchBoxWrapper onClick={() => copyToClipboard(postalCode)}>

      <RecentSearchAddressWrapper>
        <ClockIconWrapper>
          <ClockIcon src={clockIcon}/>
        </ClockIconWrapper>
        <RecentSearchAddress>{address}</RecentSearchAddress>
      </RecentSearchAddressWrapper>
      
      <RecentSearchAddressPostalCode>{postalCode}</RecentSearchAddressPostalCode>
    </RecentSearchBoxWrapper>
  )
}

const RecentSearchBoxWrapper = styled.div`
  display: flex;
  padding: 19px 4px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: #f8f8f8;
  }
`

const ClockIcon = styled.img`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RecentSearchAddress = styled.p`
  color: #222;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const RecentSearchAddressPostalCode = styled.p`
  color: #6A6A6A;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const RecentSearchAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ClockIconWrapper = styled.div`
  border-radius: 9999px;
  background: #F2F2F2;
  width: 28px;
  height: 28px;
  position: relative;
`