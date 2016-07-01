import * as actionTypes from '../actions/actionTypes'
import { validate } from '../helpers/cardNumberValidator'

const initialState = {
  cardNumber: '',
  isFetching: false,
  lifts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CARD_NUMBER:
      return {
        ...state,
        cardNumber: action.cardNumber,
        isValid: validate(action.cardNumber)
      }
    case actionTypes.REQUEST_SKIPASS_DATA:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVE_SKIPASS_DATA:
      return {
        ...state,
        ...action.skipass,
        isFetching: false
      }
    default:
      return state
  }
}
