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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

export default App
