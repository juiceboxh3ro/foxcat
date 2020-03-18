import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_FACTS = 'UPDATE_FETCH'
export const SET_ERROR = 'SET_ERROR'

export const FETCH_FOX = 'FETCH_FOX'
export const UPDATE_FOX = 'UPDATE_FOX'


const cors = 'https://cors-anywhere.herokuapp.com/'

const cat_fact = 'https://cat-fact.herokuapp.com/facts'
const fox_picture = 'https://randomfox.ca/floof/'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA })
  axios
  .get(`${cors+cat_fact}`)
  .then(res => {
    dispatch({ type: UPDATE_FACTS, payload: res.data })
  })
  .catch(err => {
    console.error('There was a problem getting data from the API', err)
    dispatch({ type: SET_ERROR, payload: 'There was a problem getting data from the API' })
  })
}

export const getFox = () => dispatch => {
  dispatch({ type: FETCH_FOX })
  axios
  .get(`${cors+fox_picture}`)
  .then(res => {
    dispatch({ type: UPDATE_FOX, payload: res.data })
  })
  .catch(err => {
    console.error('There was a problem getting data from the API', err)
    dispatch({ type: SET_ERROR, payload: 'There was a problem getting data from the API' })
  })
}