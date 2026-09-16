import styled from "styled-components"

export default function Footer() {
  return(
    <FooterWrapper>  
      <FooterText>행정안전부 도로명주소 DB 기준 · 약관에 따라 무료로 이용 가능합니다.</FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  padding: 40px 24px;
`

const FooterText = styled.p`
  font-size: 12px;
  color: #6A6A6A;
`