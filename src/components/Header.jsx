import logo from "../asset/logo.svg"
import styled from "styled-components"

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="" />
      <IntroduceText>주소를 검색하면 <br />우편번호가 보입니다.</IntroduceText>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
`

const IntroduceText = styled.h2`
  font-size : 32px;
  align-self: center;
  text-align: center;
  line-height: 1.3;
`

const Logo = styled.img`
  width: 80px;
  height: 80px;
`





