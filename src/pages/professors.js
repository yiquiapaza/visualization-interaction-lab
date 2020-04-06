import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import CardAnderson from "../components/card_professor/card_anderson"
import CardCarla from "../components/card_professor/card_carla"
import CardLuciana from "../components/card_professor/card_luciana"

const Professors = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <CardAnderson />
            </div>
            <div className="column">
              <CardCarla />
            </div>
            <div className="column">
              <CardLuciana />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Professors
