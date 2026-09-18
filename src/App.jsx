import Header from "./components/Header"
import styled from "styled-components"
import "./index.css"
import SearchCard from "./components/SearchCard"
import Footer from "./components/Footer"

function App() {

  return (
    <Page>
      <Header/>
      <SearchCard/>
      <Footer/>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  padding: 64px 16px 402.03px 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  max-height: 100vh;
`

export default App
