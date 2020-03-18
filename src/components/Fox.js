import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"

import { getFox } from '../actions'

const Fox = props => {
  let [trigger, setTrigger] = useState(1);

  useEffect(() => props.getFox(),[trigger])

  const handleTrig = e => {
    e.preventDefault();
    setTrigger(trigger += 1)
  }

  return (
    <div className="fox-container">
      <section>
        <h2>Wowee, that's a fox!</h2>
        <button className="fox-getter" onClick={handleTrig}>BRING ME ANOTHER!!</button>
        {trigger > 1 ? <p className="fox-counter">You've seen {trigger} foxes.</p>: (
          <p></p>
        )}
      </section>

      <section className="fox">
        <img alt="a random fox" src={props.image}/>
      </section>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    image: state.image
  }
}

export default connect(mapStateToProps, { getFox })(Fox);