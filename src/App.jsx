import Header from "./components/Header"
import styled from "styled-components"
import "./index.css"
import SearchCard from "./components/SearchCard"

function App() {

  return (
    <Page>
      <Header/>
      <SearchCard/>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export default App
