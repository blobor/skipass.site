import { connect } from 'react-redux'

import CardNumberForm from '../components/CardNumberForm'
import { fetchSkipassData } from '../core/actions/search-skipass.actions'

const mapStateToProps = state => {
  const searchSkipass = state.get('searchSkipass').toJS()

  return {
    isDisabled: searchSkipass.isFetching,
    cardNumber: searchSkipass.skipassNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: (skipassNumber) => {
      dispatch(fetchSkipassData(skipassNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNumberForm)
