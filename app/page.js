import Statistics from "./Statistics"
import Card from "./Card"
import Footer from "./Footer"

function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Statistics />
      </div>
      <Card />
      <Footer/>
    </>
  )
}

export default HomePage