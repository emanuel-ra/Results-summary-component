import Footer from "./components/Footer"
import ResultContainer from "./components/ResultContainer"
import SummaryContainer from "./components/SummaryContainer"

function App() {
  return (
    <>
      <main className="container">
        <ResultContainer />
        <SummaryContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
