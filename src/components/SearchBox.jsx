import styled from "styled-components";

export default function SearchBox({ postalCode, roadName, jibunName }) {

  return (
    <SearchBoxWrapper>
      <PostalCode>{postalCode}</PostalCode>

      <AddressWrapper>
        <Address>
          <AddressIcon>도로명</AddressIcon>
          <span>{roadName}</span>
        </Address>

        <Address>
          <AddressIcon>지번</AddressIcon>
          <span>{jibunName}</span>
        </Address>
      </AddressWrapper>
    </SearchBoxWrapper>
  )
}

const SearchBoxWrapper = styled.div`
  display: flex;
  min-height: 92px;
  padding: 23.5px 20px;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;
`

const PostalCode = styled.p`

  color: #FF385C;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: #222;
  font-family: Inter;
  font-size: 13.5px;
  font-weight: 400;
  line-height: normal;
`

const AddressIcon = styled.span`
  flex-shrink: 0;

  color: #222;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;

  border: 1px solid #ddd;
  padding: 2px 4px;
  border-radius: 3px;
`
