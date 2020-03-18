import React from 'react'
import { connect } from "react-redux"

import { getData } from '../actions'

import FactList from './FactList'

const FactsForm = props => {

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  }

  return (
    <>
      {props.isFetchingData ? (
        <p>Getting some dank cat facts for you</p>
      ) : <></>}

      {props.facts.length === 0 ? (
        <button className="get-button" onClick={handleGetData}>Show me them cat facts!</button>
      ) : <></>}

      <FactList />
    </>
  )
}

const mapStateToProps = state => {
  return {
    facts: state.facts,
    isFetchingData: state.isFetchingData
  }
}

// export default connect(state => state, null)(FactsForm);
export default connect(mapStateToProps, { getData })(FactsForm);