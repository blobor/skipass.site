import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isValid: true,
  skipassNumber: '',
  skipass: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SKIPASS_NUMBER:
      return {
        ...state,
        skipassNumber: action.skipassNumber,
        isValid: action.isValid
      }
    case actionTypes.FETCH_SKIPASS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_SKIPASS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        skipass: {
          ...action.skipass
        }
      }
    case actionTypes.FETCH_SKIPASS_FAILURE:
      return {
        ...state,
        isFetching: false,
        skipass: null,
        error: action.error
      }
    default:
      return state
  }
}