function ResultContainer() {
  return (
    <section className="results">
        <h1 className="text-pale-blue opacity-75">Your Result</h1>
        
        <section className="results-circle">
            <span className="final-score text-white">76</span>
            <small className="text-pale-blue font-semibold opacity-50">of 100</small>
        </section>

        <h2 className="text-white">Great</h2>
        <p className="text-pale-blue opacity-50 text-center block">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}

export default ResultContainer