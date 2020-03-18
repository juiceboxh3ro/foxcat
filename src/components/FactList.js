import React from 'react'
import { connect } from "react-redux";

const FactList = ({facts, error}) => {
  console.log(facts)
  return (
    <div className="cat-container">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          {facts.map(fact =>
          <div key={fact._id} className="cat-fact">
            <p className="cat-fact-text">{fact.text}</p>
            <p className="cat-upvotes">{fact.upvotes} upvotes</p>
          </div>)}
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    facts: state.facts,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(FactList);