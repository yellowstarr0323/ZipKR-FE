import logo from "../asset/logo.svg"
import styled from "styled-components"

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="" />
      <IntroduceText>주소를 입력하면 <br />우편번호가 보입니다.</IntroduceText>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
`

const IntroduceText = styled.h2`
  font-size : 32px;
  align-self: center;
  text-align: center;
  line-height: 1.2;
`

const Logo = styled.img`
  width: 52px;
  height: 52px;
`
