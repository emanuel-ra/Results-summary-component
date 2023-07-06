import { data as Categories } from "../mooks/data"
function SummaryContainer() {
  return (
    <section className="summary">
        <h2>Summary</h2>
        <article className="flex flex-col w-full gap-4">
          {Categories.map( (category,index) => (
              <div key={index} className={`category-score category-${category.category.toLowerCase()}`}>                
                <span className="block flex gap-4">
                  <img src={category.icon} alt={category.category} /> 
                  <span className="title">{category.category}</span>
                </span>
                <span className="font-bold">{category.score} <span className="text-one-hundred">/100</span> </span>
              </div>
            )
          )}
        </article>
        <button>
          Continue
        </button>
    </section>
  )
}

export default SummaryContainer