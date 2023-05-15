import React from "react";
import { useState } from 'react'
import Star from '../images/icon-star.svg'

function Rate() {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  const buttons = [
    {id: 1, scale: "1"},
    {id: 2, scale: "2"},
    {id: 3, scale: "3"},
    {id: 4, scale: "4"},
    {id: 5, scale: "5"},
  ]
  const [selectScale, setSelectScale] = useState(0)
  const handleScaleColor = (row) => {
  setSelectScale(row.id)
}

    return (
        <main className="App">
          <section className="rating-container">
              <div className="rating-wrapper">
                <div className="star-container">
                  <img className="star-icon" src={Star} alt="star"/>
                </div>
                <h1>How did we do?</h1>
                <p>
                  Please let us know how we did with your support request. 
                  All feedback is appreciated to help us improve
                  our offering!
                </p>
                <div className="scale-container">
                 {buttons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => handleScaleColor(button)}
                    style={{ backgroundColor: button.id === selectScale ? "hsl(217, 12%, 63%)" : ""}}>
                    {button.scale}
                  </button>
                 ))}
                </div>
                <button
                onClick={handleClick}
                style={{
                  backgroundColor: isActive ? "hsl(0, 0%, 100%)" : "",
                  color: isActive ? "hsl(25, 97%, 53%)" : "",
                }}
                className="submit-btn">SUBMIT</button>              
              </div>
          </section>
        </main>
    )
}

export default Rate